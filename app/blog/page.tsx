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
        <div className="min-h-screen bg-slate-50">
            {/* Premium Hero Header */}
            <div className="relative overflow-hidden text-white bg-primary bg-[url('/images/extracted/ce86f8df-91ce-41bf-a2d1-9f50f136827f.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-primary/75 backdrop-blur-[2px]"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                    <div className="text-center">
                        <div className="inline-flex items-center px-5 py-2.5 bg-white/10 backdrop-blur-md rounded-full mb-8 border border-white/20 shadow-xl">
                            <span className="text-sm font-bold text-white tracking-widest uppercase">Medical Information</span>
                        </div>
                        <h1 className="text-5xl sm:text-7xl font-black mb-8 text-white drop-shadow-2xl tracking-tighter">
                            건강정보 <span className="text-accent">블로그</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-slate-100 max-w-2xl mx-auto leading-relaxed font-bold drop-shadow-md break-keep">
                            25년 임상경험, 6인의 내과 전문의가 전하는<br className="hidden sm:block" /> 신뢰할 수 있는 의학 지식입니다.
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8">
                {posts.length === 0 ? (
                    <div className="text-center py-32 bg-white rounded-3xl shadow-sm border border-slate-100">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-slate-50 mb-8 shadow-sm border border-slate-200">
                            <span className="text-5xl">📝</span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-3">준비중입니다</h3>
                        <p className="text-gray-500 text-lg">곧 유익한 건강정보를 만나보실 수 있습니다.</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                                <article
                                    className="h-full bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 hover:scale-[1.02] hover:-translate-y-1 flex flex-col"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    {/* Thumbnail with Gradient Overlay */}
                                    <div className="relative h-56 w-full overflow-hidden">
                                        <TypographicCover title={post.title} tags={post.tags} slug={post.slug} showTags={false} />
                                        {/* Floating Tag */}
                                        {post.tags?.[0] && (
                                            <div className="absolute top-4 left-4 z-10">
                                                <span className="px-4 py-2 bg-primary text-white rounded-full text-xs font-bold shadow-md backdrop-blur-sm border border-white/20">
                                                    {post.tags[0]}
                                                </span>
                                            </div>
                                        )}
                                        {/* Date Badge */}
                                        <div className="absolute bottom-4 right-4 z-10">
                                            <div className="px-3 py-1.5 bg-black/40 backdrop-blur-md text-white rounded-full text-xs font-semibold">
                                                {post.date}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-black text-slate-900 mb-3 line-clamp-2 group-hover:text-accent transition-colors leading-tight tracking-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm mb-5 line-clamp-3 leading-relaxed flex-1 break-keep">
                                            {post.description}
                                        </p>

                                        {/* Read More Button */}
                                        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                                            <span className="text-primary text-sm font-bold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                                                자세히 보기
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </span>
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
