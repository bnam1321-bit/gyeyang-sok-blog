const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '../content/posts');

const files = fs.readdirSync(dir).filter(f => f.endsWith('.md')).sort();
console.log(`Total posts: ${files.length}`);
files.forEach((f, idx) => {
    const c = fs.readFileSync(path.join(dir, f), 'utf8');
    const m = c.match(/title:\s*["']?(.*?)["']?(\r?\n|$)/);
    const title = m ? m[1] : 'No title';
    console.log(`${idx + 1}. [${f}] : ${title}`);
});
