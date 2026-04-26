/**
 * optimize-home.js
 * 
 * Extracts base64-encoded assets from home.html's bundler manifest,
 * saves them as separate files in public/images/extracted/,
 * then generates an optimized home.html that references
 * those external files instead of embedding the data inline.
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SRC_FILE = path.join(PUBLIC_DIR, 'home.html');
const OUT_DIR = path.join(PUBLIC_DIR, 'images', 'extracted');
const OUT_FILE = path.join(PUBLIC_DIR, 'home.html');
const BACKUP_FILE = path.join(PUBLIC_DIR, 'home.original.html');

// Read the source HTML
const html = fs.readFileSync(SRC_FILE, 'utf-8');

// 1. Extract the manifest JSON
const manifestMatch = html.match(/<script type="__bundler\/manifest">\s*([\s\S]*?)\s*<\/script>/);
if (!manifestMatch) {
  console.error('Could not find __bundler/manifest script tag');
  process.exit(1);
}
const manifest = JSON.parse(manifestMatch[1]);

// 2. Extract the template JSON
const templateMatch = html.match(/<script type="__bundler\/template">\s*([\s\S]*?)\s*<\/script>/);
if (!templateMatch) {
  console.error('Could not find __bundler/template script tag');
  process.exit(1);
}
let template = JSON.parse(templateMatch[1]);

// 3. Extract ext_resources if present
let extResources = [];
const extResMatch = html.match(/<script type="__bundler\/ext_resources">\s*([\s\S]*?)\s*<\/script>/);
if (extResMatch) {
  extResources = JSON.parse(extResMatch[1]);
}

// 4. Create output directory
fs.mkdirSync(OUT_DIR, { recursive: true });

// 5. Decode each asset and save to disk, collect URL mappings
const uuidToPath = {};
const uuids = Object.keys(manifest);
console.log(`Found ${uuids.length} assets in manifest`);

for (const uuid of uuids) {
  const entry = manifest[uuid];
  const ext = entry.mime.split('/')[1] || 'bin';
  // Map common mime subtypes to proper extensions
  const extMap = {
    'png': 'png',
    'jpeg': 'jpg',
    'jpg': 'jpg', 
    'gif': 'gif',
    'svg+xml': 'svg',
    'webp': 'webp',
    'javascript': 'js',
    'css': 'css',
    'html': 'html',
  };
  const fileExt = extMap[ext] || ext;
  const filename = `${uuid}.${fileExt}`;
  const filePath = path.join(OUT_DIR, filename);
  
  // Decode base64 to buffer
  let buffer;
  if (entry.compressed) {
    // For compressed assets, we save the raw compressed data
    // The browser will need to decompress - but since we're replacing 
    // the blob URL approach, we need to decompress first
    const zlib = require('zlib');
    const compressedBuffer = Buffer.from(entry.data, 'base64');
    try {
      buffer = zlib.gunzipSync(compressedBuffer);
    } catch (e) {
      console.warn(`Warning: Could not decompress asset ${uuid}, saving raw data`);
      buffer = compressedBuffer;
    }
  } else {
    buffer = Buffer.from(entry.data, 'base64');
  }
  
  fs.writeFileSync(filePath, buffer);
  const webPath = `/images/extracted/${filename}`;
  uuidToPath[uuid] = webPath;
  
  const sizeMB = (buffer.length / 1024 / 1024).toFixed(2);
  console.log(`  Extracted: ${filename} (${sizeMB} MB, ${entry.mime})`);
}

// 6. Replace UUIDs in the template with file paths
for (const uuid of uuids) {
  template = template.split(uuid).join(uuidToPath[uuid]);
}

// 7. Strip integrity and crossorigin attributes (same as the bundler does)
template = template.replace(/\s+integrity="[^"]*"/gi, '').replace(/\s+crossorigin="[^"]*"/gi, '');

// 8. Handle ext_resources
if (extResources.length > 0) {
  const resourceMap = {};
  for (const entry of extResources) {
    if (uuidToPath[entry.uuid]) {
      resourceMap[entry.id] = uuidToPath[entry.uuid];
    }
  }
  // Inject resource map into head
  const resourceScript = '<script>window.__resources = ' + 
    JSON.stringify(resourceMap).replace(/<\/script>/g, '<\\/script>') + 
    ';</script>';
  const headMatch = template.match(/<head[^>]*>/i);
  if (headMatch) {
    const i = headMatch.index + headMatch[0].length;
    template = template.slice(0, i) + resourceScript + template.slice(i);
  }
}

// 9. Backup original and write optimized file
fs.copyFileSync(SRC_FILE, BACKUP_FILE);
console.log(`\nBacked up original to: ${BACKUP_FILE}`);

fs.writeFileSync(OUT_FILE, template, 'utf-8');

const originalSize = fs.statSync(BACKUP_FILE).size;
const newSize = fs.statSync(OUT_FILE).size;
console.log(`\nOriginal size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Optimized size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Reduction: ${((1 - newSize / originalSize) * 100).toFixed(1)}%`);
console.log('\nDone! Images extracted to:', OUT_DIR);
