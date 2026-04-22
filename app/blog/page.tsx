import { getAllPosts } from '@/lib/blog';
import Link from 'next/link';
import TypographicCover from '@/app/components/TypographicCover';
import { CLINIC_NAME } from '@/lib/constants';

export const metadata = {
    title: `嫄닿컯?뺣낫 | ${CLINIC_NAME}`,
    description: `${CLINIC_NAME} ?꾨Ц?섍? ?꾪븯??嫄닿컯?뺣낫 移쇰읆?낅땲??`,
};

export default function BlogPage() {
    const posts = getAllPosts();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            {/* Premium Header */}
            <div className="relative overflow-hidden bg-[#0F1B2D] text-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDEzNGgxMnYxMkgzNnptMjQgMGgxMnYxMkg2MHpNMTIgMTQ2aDEydjEySDEyem0yNCAwaDEydjEySDM2em0yNCAwaDEydjEySDYweiIvPjwvZz48L2c+PC9zdmc+')] opacity-5"></div>
                <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/40 to-transparent"></div>
                
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10">
                            <span className="text-sm font-semibold text-blue-200">?뫅?띯슃截??닿낵 ?꾨Ц??嫄닿컯 移쇰읆</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 text-white tracking-tight">
                            嫄닿컯?뺣낫
                        </h1>
                        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed opacity-90">
                            25??吏꾨즺 寃쏀뿕??諛뷀깢?쇰줈, 瑗??꾩슂???섑븰 吏?앹쓣 ?뚭린 ?쎄쾶 ?꾪빐?쒕┰?덈떎.
                        </p>
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-8 relative z-10">
                {posts.length === 0 ? (
                    <div className="text-center py-32 bg-white rounded-3xl shadow-md border border-gray-100">
                        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-50 text-blue-500 mb-8">
                            <span className="text-4xl">?뱷</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">以鍮꾩쨷?낅땲??/h3>
                        <p className="text-gray-500 text-lg">泥?踰덉㎏ 嫄닿컯 移쇰읆??怨??낅뜲?댄듃???덉젙?낅땲??</p>
                    </div>
                ) : (
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post, index) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block h-full">
                                <article
                                    className="h-full bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 flex flex-col"
                                >
                                    {/* Thumbnail Cover */}
                                    <div className="relative h-56 w-full shrink-0">
                                        <TypographicCover
                                            title={post.title}
                                            tags={post.tags}
                                            slug={post.slug}
                                        />
                                        <div className="absolute bottom-4 right-4 z-10">
                                            <div className="px-3 py-1.5 bg-black/50 backdrop-blur-md text-white rounded-full text-xs font-semibold tracking-wide">
                                                {post.date}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="text-xl font-black text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                                            {post.description}
                                        </p>

                                        {/* Footer */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                                            <span className="text-blue-600 text-sm font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                                                ?쎌뼱蹂닿린
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
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
