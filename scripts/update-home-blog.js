const fs = require('fs');
const path = require('path');

const HOME_FILE = path.join(__dirname, '../public/home.html');
let html = fs.readFileSync(HOME_FILE, 'utf-8');

// 1. Remove the global blogPosts array
const blogPostsStart = html.indexOf('const blogPosts = [');
if (blogPostsStart > -1) {
    const blogPostsEnd = html.indexOf('];', blogPostsStart) + 2;
    html = html.substring(0, blogPostsStart) + html.substring(blogPostsEnd);
}

// 2. Inject state into App
const appStart = html.indexOf('function App() {');
if (appStart > -1) {
    const injectPos = appStart + 'function App() {'.length;
    const stateLogic = `
  const [blogPosts, setBlogPosts] = useState([
    { tag: "당뇨", title: "혈당을 잡는 일상 습관 7가지", date: "2026.04.15", desc: "당뇨 관리의 핵심은 약보다 생활 습관입니다. 식이요법부터 운동까지 실천 가능한 방법을 알려드립니다." },
    { tag: "고혈압", title: "봄철 혈압 변화, 왜 더 조심해야 할까?", date: "2026.04.08", desc: "기온 변화가 큰 봄에는 혈압이 불안정해지기 쉽습니다. 계절별 혈압 관리 요령을 정리했습니다." },
    { tag: "예방접종", title: "HPV 백신, 남성도 맞아야 하나요?", date: "2026.03.28", desc: "자궁경부암 예방 백신으로 알려진 가다실9, 남성 접종의 효과와 권장 연령에 대해 알아봅니다." },
    { tag: "감기/독감", title: "독감과 감기, 어떻게 구별하나요?", date: "2026.03.20", desc: "비슷해 보이지만 원인도 치료도 다른 독감과 감기. 주요 증상 차이를 명확히 설명합니다." },
    { tag: "건강정보", title: "통풍 발작, 응급처치와 예방법", date: "2026.03.10", desc: "갑작스러운 관절 통증, 통풍일 수 있습니다. 발작 시 대처법과 재발 방지 식단을 소개합니다." },
    { tag: "건강검진", title: "공단 건강검진, 꼭 챙겨야 할 이유", date: "2026.03.01", desc: "2년에 한 번 무료로 받는 건강검진, 어떤 항목이 포함되는지 한눈에 정리해드립니다." },
  ]);

  useEffect(() => {
    fetch('/api/latest-posts')
      .then(res => res.json())
      .then(data => {
        if(data && data.length > 0) {
          setBlogPosts(data.map(post => ({
            tag: post.tags && post.tags.length > 0 ? post.tags[0] : "건강정보",
            title: post.title,
            date: post.date,
            desc: post.description,
            slug: post.slug
          })));
        }
      })
      .catch(err => console.error("Failed to load posts", err));
  }, []);
`;
    html = html.substring(0, injectPos) + stateLogic + html.substring(injectPos);
}

// 3. Replace BlogCard definition
const blogCardRegex = /function BlogCard\(\{ tag, title, date, desc, variant \}\) \{([\s\S]*?)function App/m;
const match = html.match(blogCardRegex);
if (match) {
    const newBlogCard = `function BlogCard({ tag, title, date, desc, variant, slug }) {
  const [hover, setHover] = useState(false);
  const cardStyleB = {
    background: hover ? "#1a2a5e" : "white",
    border: "1px solid #e8ecf4",
    padding: "28px 24px",
    cursor: "pointer",
    transition: "all 0.2s",
    textDecoration: "none",
    display: "block",
    height: "100%"
  };
  const cardStyleA = {
    background: "#fff",
    borderRadius: 16,
    padding: "28px 24px",
    cursor: "pointer",
    transition: "all 0.25s",
    boxShadow: hover ? "0 8px 28px rgba(26,42,94,0.12)" : "0 2px 8px rgba(0,0,0,0.05)",
    transform: hover ? "translateY(-3px)" : "none",
    border: "1px solid #f1f4f9",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    textDecoration: "none"
  };

  if (variant === "B") {
    const content = (
      <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={cardStyleB}>
        <div style={{ fontSize: 11, fontWeight: 800, color: hover ? "oklch(75% 0.15 210)" : "oklch(55% 0.15 210)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 14 }}>{tag}</div>
        <h3 style={{ fontSize: 15, fontWeight: 700, color: hover ? "white" : "#1a2a5e", marginBottom: 10, lineHeight: 1.5 }}>{title}</h3>
        <p style={{ fontSize: 13, color: hover ? "rgba(255,255,255,0.6)" : "#8892a4", lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
        <div style={{ fontSize: 12, color: hover ? "rgba(255,255,255,0.4)" : "#c0c8d8" }}>{date}</div>
      </div>
    );
    return slug ? <a href={"/blog/" + slug} style={{textDecoration:"none"}}>{content}</a> : content;
  }

  const content = (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={cardStyleA}>
      <div style={{ fontSize: 12, fontWeight: 800, color: "oklch(55% 0.15 210)", padding: "4px 10px", background: "rgba(35,142,166,0.08)", borderRadius: 8, display: "inline-block", alignSelf: "flex-start", marginBottom: 16 }}>{tag}</div>
      <h3 style={{ fontSize: 17, fontWeight: 800, color: "#1a2a5e", marginBottom: 12, lineHeight: 1.4, flex: 1 }}>{title}</h3>
      <p style={{ fontSize: 14, color: "#66728a", lineHeight: 1.6, marginBottom: 20 }}>{desc}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #f1f4f9", paddingTop: 16 }}>
        <span style={{ fontSize: 13, color: "#9aa4b8", fontWeight: 500 }}>{date}</span>
        <span style={{ fontSize: 13, color: "oklch(55% 0.15 210)", fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>더 보기 <ArrowRight size={14}/></span>
      </div>
    </div>
  );
  return slug ? <a href={"/blog/" + slug} style={{textDecoration:"none", display: "block", height: "100%"}}>{content}</a> : content;
}

`;
    html = html.substring(0, match.index) + newBlogCard + "function App";
}

// 4. Update 전체 보기 button
html = html.replace('>전체 보기 <ArrowRight /></button>', ' onClick={() => window.location.href="/blog"}>전체 보기 <ArrowRight /></button>');

fs.writeFileSync(HOME_FILE, html);
console.log('Update complete!');
