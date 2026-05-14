import fs from 'fs';
import path from 'path';

const CLEAN_CONTENT_REGEX = {
  comments: /\/\*[\s\S]*?\*\/|\/\/.*$/gm,
  templateLiterals: /`[\s\S]*?`/g,
  strings: /'[^']*'|"[^"]*"/g,
  jsxExpressions: /\{.*?\}/g,
  htmlEntities: {
    quot: /&quot;/g,
    amp: /&amp;/g,
    lt: /&lt;/g,
    gt: /&gt;/g,
    apos: /&apos;/g
  }
};

const EXTRACTION_REGEX = {
  route: /<Route\s+[^>]*>/g,
  path: /path=["']([^"']+)["']/, 
  element: /element=\{<([\w]+)[^}]*\/?\s*>\}/,
  helmet: /<Helmet[^>]*?>([\s\S]*?)<\/Helmet>/i,
  helmetTest: /<Helmet[\s\S]*?<\/Helmet>/i,
  title: /<title[^>]*?>\s*(.*?)\s*<\/title>/i,
  description: /<meta\s+name=["']description["']\s+content=["'](.*?)["']/i
};

function cleanContent(content) {
  return content
    .replace(CLEAN_CONTENT_REGEX.comments, '')
    .replace(CLEAN_CONTENT_REGEX.templateLiterals, '""')
    .replace(CLEAN_CONTENT_REGEX.strings, '""');
}

function cleanText(text) {
  if (!text) return text;
  return text
    .replace(CLEAN_CONTENT_REGEX.jsxExpressions, '')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.quot, '"')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.amp, '&')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.lt, '<')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.gt, '>')
    .replace(CLEAN_CONTENT_REGEX.htmlEntities.apos, "'")
    .trim();
}

function extractRoutes(appJsxPath) {
  if (!fs.existsSync(appJsxPath)) return new Map();
  const content = fs.readFileSync(appJsxPath, 'utf8');
  const routes = new Map();
  const routeMatches = [...content.matchAll(EXTRACTION_REGEX.route)];
  console.log('routeMatches count', routeMatches.length);
  for (const match of routeMatches) {
    const routeTag = match[0];
    const pathMatch = routeTag.match(EXTRACTION_REGEX.path);
    const elementMatch = routeTag.match(EXTRACTION_REGEX.element);
    const isIndex = routeTag.includes('index');
    if (elementMatch) {
      const componentName = elementMatch[1];
      let routePath;
      if (isIndex) {
        routePath = '/';
      } else if (pathMatch) {
        routePath = pathMatch[1].startsWith('/') ? pathMatch[1] : `/${pathMatch[1]}`;
      }
      routes.set(componentName, routePath);
    }
  }
  console.log('routes', [...routes.entries()].slice(0, 20));
  return routes;
}

function findReactFiles(dir) {
  return fs.readdirSync(dir).map(item => path.join(dir, item));
}

function extractHelmetData(content, filePath, routes) {
  const cleanedContent = cleanContent(content);
  const hasHelmet = EXTRACTION_REGEX.helmetTest.test(cleanedContent);
  if (!hasHelmet) {
    return null;
  }
  const helmetMatch = content.match(EXTRACTION_REGEX.helmet);
  if (!helmetMatch) return null;
  const helmetContent = helmetMatch[1];
  const titleMatch = helmetContent.match(EXTRACTION_REGEX.title);
  const descMatch = helmetContent.match(EXTRACTION_REGEX.description);
  const title = cleanText(titleMatch?.[1]);
  const description = cleanText(descMatch?.[1]);
  const fileName = path.basename(filePath, path.extname(filePath));
  const url = routes.size && routes.has(fileName)
    ? routes.get(fileName)
    : `/${fileName.replace(/Page$/, '').toLowerCase()}`;
  return { url, title: title || 'Untitled Page', description: description || 'No description available' };
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function main() {
  const cwd = process.cwd();
  const pagesDir = path.join(cwd, 'src', 'pages');
  const appJsxPath = path.join(cwd, 'src', 'App.jsx');
  const routes = extractRoutes(appJsxPath);
  const reactFiles = findReactFiles(pagesDir);
  console.log('reactFiles', reactFiles);
  const pages = reactFiles
    .map(filePath => {
      const content = fs.readFileSync(filePath, 'utf8');
      const result = extractHelmetData(content, filePath, routes);
      console.log('page', path.basename(filePath), 'result', result && { url: result.url, title: result.title });
      return result;
    })
    .filter(Boolean);
  console.log('pages count', pages.length);
  if (pages.length === 0) {
    console.error('❌ No pages with Helmet components found!');
    process.exit(1);
  }
  const llmsTxtContent = pages.sort((a,b)=>a.title.localeCompare(b.title)).map(page=>`- [${page.title}](${page.url}): ${page.description}`).join('\n');
  const outputPath = path.join(cwd, 'public', 'llms.txt');
  console.log('outputPath', outputPath);
  ensureDirectoryExists(path.dirname(outputPath));
  fs.writeFileSync(outputPath, `## Pages\n${llmsTxtContent}`, 'utf8');
  console.log('wrote', outputPath);
}

main();
