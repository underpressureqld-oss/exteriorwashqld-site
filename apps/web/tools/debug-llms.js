import fs from 'fs';
import path from 'path';

const cwd = process.cwd();
const pagesDir = path.join(cwd, 'src', 'pages');
const appJsxPath = path.join(cwd, 'src', 'App.jsx');

console.log('cwd', cwd);
console.log('pagesDirExists', fs.existsSync(pagesDir));
console.log('pagesFiles', fs.existsSync(pagesDir) ? fs.readdirSync(pagesDir) : []);
console.log('appExists', fs.existsSync(appJsxPath));
if (fs.existsSync(appJsxPath)) {
  const content = fs.readFileSync(appJsxPath, 'utf8');
  console.log('routeCount', (content.match(/<Route\s+[^>]*>/g) || []).length);
  console.log('routeSample', (content.match(/<Route\s+[^>]*>/g) || []).slice(0, 5));
}
