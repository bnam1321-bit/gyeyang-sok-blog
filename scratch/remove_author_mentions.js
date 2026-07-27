const fs = require('fs');
const path = require('path');

const postsDir = path.join(__dirname, '../content/posts');
const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));

let modifiedCount = 0;

for (const file of files) {
    const filePath = path.join(postsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    const originalContent = content;

    content = content.replace(/글을 쓴 저는 풍부한 소화기 질환을 진료해 온 의료진입니다\./g, "");
    content = content.replace(/글을 쓴 저는.*?의료진입니다\./g, "");
    content = content.replace(/본 글을 작성한 저는.*?(전문의|의료진)입니다\./g, "");
    content = content.replace(/저는.*?진료를 보면서.*?(느낍니다|생각합니다)\./g, "");
    content = content.replace(/글을 마치며, 저는.*?의료진입니다\./g, "");
    content = content.replace(/글을 마치며, 저희 의료진은.*?소속입니다\./g, "");

    // Also remove "글을 마치며," if it is left dangling
    content = content.replace(/글을 마치며,\s*본원은/g, "본원은");

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        modifiedCount++;
    }
}
console.log(`Modified ${modifiedCount} files.`);
