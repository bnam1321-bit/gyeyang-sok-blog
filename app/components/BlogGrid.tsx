'use client';

import Link from 'next/link';
import TypographicCover from './TypographicCover';

export default function BlogGrid({ posts }: { posts: any[] }) {
  // Show up to 6 posts
  const displayPosts = posts.slice(0, 6);

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-accent font-black tracking-widest uppercase text-sm mb-4">Health Information</h2>
            <h3 className="text-3xl sm:text-4xl font-black text-primary break-keep">
              인천계양속편한내과 <span className="text-accent">건강정보</span>
            </h3>
          </div>
          <Link 
            href="/blog" 
            className="text-primary font-bold flex items-center gap-2 hover:text-accent transition-colors pb-1 border-b-2 border-primary hover:border-accent"
          >
            전체 보기
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {displayPosts.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
             <p className="text-slate-400 font-medium">새로운 건강 정보가 곧 업데이트 됩니다.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, idx) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2">
                  <div className="relative h-52 w-full overflow-hidden">
                    <TypographicCover title={post.title} tags={post.tags} slug={post.slug} />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent/90 backdrop-blur-md text-white text-[10px] font-bold rounded-full uppercase tracking-tighter">
                        {post.tags?.[0] || 'Health'}
                      </span>
                    </div>
                  </div>
                  <div className="p-7">
                    <div className="text-slate-400 text-xs font-medium mb-3">{post.date}</div>
                    <h4 className="text-xl font-black text-primary mb-4 line-clamp-2 group-hover:text-accent transition-colors leading-snug">
                      {post.title}
                    </h4>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-6 leading-relaxed">
                      {post.description}
                    </p>
                    <div className="flex items-center text-primary text-xs font-bold gap-1 group-hover:text-accent transition-colors">
                      자세히 보기
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
