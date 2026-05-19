#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
let sharp;
try {
  sharp = require('sharp');
} catch (err) {
  console.error('Missing dependency: please run `npm install sharp` in apps/web`');
  process.exit(1);
}

const sizes = [480, 768, 1200, 1600, 1920];
const cwd = path.resolve(__dirname, '..');
const srcRoot = path.join(cwd, 'public', 'assets', 'src');
const outHero = path.join(cwd, 'public', 'assets', 'hero');
const outBA = path.join(cwd, 'public', 'assets', 'before-after');

const ensure = (p) => { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); };
ensure(outHero);
ensure(outBA);

function listFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(f => !f.startsWith('.')).map(f => path.join(dir, f));
}

function basenameNoExt(filename) {
  return path.basename(filename, path.extname(filename));
}

async function generateForFile(inputPath, outputDir) {
  const base = basenameNoExt(inputPath);
  for (const w of sizes) {
    const outJpg = path.join(outputDir, `${base}-${w}.jpg`);
    const outWebp = path.join(outputDir, `${base}-${w}.webp`);
    try {
      await sharp(inputPath).resize({ width: w }).jpeg({ quality: 82 }).toFile(outJpg);
      await sharp(inputPath).resize({ width: w }).webp({ quality: 78 }).toFile(outWebp);
      console.log('W', w, base);
    } catch (err) {
      console.error('Error processing', inputPath, err.message);
    }
  }
  // also create a sensible default base image (1200w)
  const defaultJpg = path.join(outputDir, `${base}.jpg`);
  const defaultWebp = path.join(outputDir, `${base}.webp`);
  try {
    await sharp(inputPath).resize({ width: 1200 }).jpeg({ quality: 82 }).toFile(defaultJpg);
    await sharp(inputPath).resize({ width: 1200 }).webp({ quality: 78 }).toFile(defaultWebp);
  } catch (err) {
    console.error('Error creating default images for', inputPath, err.message);
  }
}

async function run() {
  console.log('Scanning', srcRoot);
  // hero sources (optional subfolder hero)
  const heroDir = path.join(srcRoot, 'hero');
  const heroFiles = listFiles(heroDir);
  for (const f of heroFiles) {
    await generateForFile(f, outHero);
  }

  const baDir = path.join(srcRoot, 'before-after');
  const baFiles = listFiles(baDir);
  for (const f of baFiles) {
    await generateForFile(f, outBA);
  }

  console.log('Done. Generated images in:', outHero, outBA);
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
