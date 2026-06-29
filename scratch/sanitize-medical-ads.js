const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  const originalLineEndings = content.includes('\r\n') ? '\r\n' : '\n';
  content = content.replace(/\r\n/g, '\n');

  let updated = false;
  replacements.forEach(([target, replacement]) => {
    if (content.includes(target)) {
      content = content.split(target).join(replacement);
      updated = true;
    }
  });

  if (updated) {
    if (originalLineEndings === '\r\n') {
      content = content.replace(/\n/g, '\r\n');
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated file: ${filePath}`);
  }
}

// replacements list
const replacements = [
  ['대학병원급의', '첨단의'],
  ['대학병원급에서 사용하는', '정밀 검사용'],
  ['대학병원급 장비인', '정밀 장비인'],
  ['대학병원급 장비가', '정밀 진단 장비가'],
  ['대학병원급 첨단', '정밀 첨단'],
  ['대학병원급 최상위', '정밀 최상위'],
  ['대학병원급 정밀', '정밀'],
  ['대학병원급 최신', '정밀 최신'],
  ['대학병원급', '정밀'],
  ['대학병원처럼', '대형병원처럼'],
  ['대학병원 대기', '대형병원 대기'],
  ['대학병원을 가지 않고도', '대형병원을 가지 않고도'],
  ['대학병원 수준의', '우수한 성능의']
];

// 1. Process files
const sourceFiles = [
  'public/home.html',
  'app/services/page.tsx',
  'app/components/TrustStats.tsx',
  'app/components/Hero.tsx',
  'scripts/prompts.js',
  'scripts/generate-post.js'
];

sourceFiles.forEach(f => replaceInFile(f, replacements));

// 2. Process all posts in content/posts/
const postsDir = 'content/posts';
if (fs.existsSync(postsDir)) {
  fs.readdirSync(postsDir).forEach(file => {
    if (file.endsWith('.md')) {
      const fullPath = path.join(postsDir, file);
      replaceInFile(fullPath, replacements);
    }
  });
}

console.log('Sanitization of medical advertising terms completed successfully!');
