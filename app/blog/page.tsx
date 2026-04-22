import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import TypographicCover from '@/app/components/TypographicCover';
import { CLINIC_NAME } from '@/lib/constants';

export const metadata = {
    title: `건강정보 | ${CLINIC_NAME}`,
    description: `${CLINIC_NAME} 전문의가 전하는 올바른 건강 정보입니다.`,
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-bg">
            {/* Header Section */}
            <section className="bg-primary py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">건강정보</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto break-keep">
                        25년의 진료 경험을 바탕으로, 꼭 필요한 의학 지식을 알기 쉽게 전해드립니다.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                {posts.length === 0 ? (
                    <div className="text-center py-32 bg-white rounded-[40px] shadow-sm border border-slate-100">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-50 text-4xl mb-8">
                            📫
                        </div>
                        <h3 className="text-2xl font-black text-primary mb-4">준비 중입니다</h3>
                        <p className="text-slate-500">첫 번째 건강 칼럼이 곧 업데이트될 예정입니다.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <article className="bg-white rounded-[40px] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all hover:-translate-y-2 flex flex-col h-full">
                                    <div className="h-60 relative overflow-hidden">
                                        <TypographicCover
                                            title={post.title}
                                            tags={post.tags}
                                            slug={post.slug}
                                        />
                                        <div className="absolute bottom-4 left-6">
                                            <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-black rounded-full border border-white/30 uppercase tracking-widest">
                                                {post.date}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-1">
                                        <h3 className="text-xl font-black text-primary mb-4 line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8 flex-1 break-keep">
                                            {post.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-accent font-black text-xs uppercase tracking-widest">
                                            <span>Read More</span>
                                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
