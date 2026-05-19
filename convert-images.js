const sharp = require('./node_modules/.pnpm/sharp@0.34.5/node_modules/sharp');
const path = require('path');
const fs = require('fs');

const srcDir = './public/games/farming-simulator-26/screenshots';
const destDir = './public/games/farming-simulator-26/homepage';

// Map screenshots to homepage guide card images
const mappings = [
  { src: 'farming-simulator-26-screenshot-1.webp', dest: 'release-date-platforms-guide.webp' },
  { src: 'farming-simulator-26-screenshot-2.webp', dest: 'maps-crops-animals-guide.webp' },
  { src: 'farming-simulator-26-screenshot-3.webp', dest: 'machines-features-guide.webp' },
  { src: 'farming-simulator-26-screenshot-5.webp', dest: 'switch-mobile-buying-guide.webp' },
];

async function createHomepageImages() {
  for (const m of mappings) {
    const srcPath = path.join(srcDir, m.src);
    const destPath = path.join(destDir, m.dest);

    await sharp(srcPath)
      .resize({ width: 800, height: 450, fit: 'cover' })
      .webp({ quality: 80 })
      .toFile(destPath);

    const stat = fs.statSync(destPath);
    console.log(m.dest + ': ' + (stat.size / 1024).toFixed(0) + ' KB');
  }
  console.log('Done!');
}

createHomepageImages().catch(console.error);
