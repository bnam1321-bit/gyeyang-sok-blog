import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';
import Link from 'next/link';
import { CLINIC_NAME, SITE_URL, CLINIC_PHONE, CLINIC_ADDRESS } from '@/lib/constants';

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: '페이지를 찾을 수 없습니다.',
        };
    }

    return {
        title: `${post.title} | ${CLINIC_NAME}`,
        description: post.description,
        keywords: [
            ...post.tags,
            CLINIC_NAME,
            '계양구내과',
            '인천계양구내과',
            '계양구위내시경',
            '계양구대장내시경',
            '계양구건강검진'
        ],
        alternates: {
            canonical: `${SITE_URL}/blog/${post.slug}`,
        },
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.date,
            url: `${SITE_URL}/blog/${post.slug}`,
            siteName: CLINIC_NAME,
            authors: [CLINIC_NAME],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        author: {
            '@type': 'MedicalClinic',
            name: CLINIC_NAME,
            url: SITE_URL
        },
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Back Navigation */}
            <div className="bg-white border-b border-slate-100 sticky top-0 z-50 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link href="/blog" className="inline-flex items-center text-sm text-slate-600 hover:text-primary transition-colors font-bold">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        건강정보 목록으로
                    </Link>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                {/* Article Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-md">
                            {post.tags?.[0] || '건강정보'}
                        </span>
                        <time className="text-slate-500 text-sm flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {post.date}
                        </time>
                    </div>

                    <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-[1.2] mb-6 break-keep tracking-tight">
                        {post.title}
                    </h1>

                    {post.description && (
                        <p className="text-xl text-slate-600 leading-relaxed border-l-4 border-accent pl-6 py-2 break-keep font-medium">
                            {post.description}
                        </p>
                    )}
                </header>

                {/* Article Content */}
                <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 mb-12 border border-white">
                    <div className="prose prose-lg max-w-none
                        prose-headings:text-primary prose-headings:font-black
                        prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-100
                        prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-5
                        prose-p:text-slate-600 prose-p:leading-relaxed prose-p:mb-8
                        prose-strong:text-slate-900 prose-strong:font-bold
                        prose-ul:my-8 prose-li:my-3
                        prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:rounded-2xl prose-blockquote:py-2 prose-blockquote:px-8
                        prose-img:rounded-3xl prose-img:shadow-lg
                    ">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="mb-12">
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-bold border border-slate-200 hover:bg-slate-50 transition-colors shadow-sm"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                
                {/* Latest Posts Section */}
                <div className="mt-20 pt-16 border-t border-slate-200">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                            <h2 className="text-3xl font-black text-primary mb-2">최신 건강정보</h2>
                            <p className="text-slate-500 font-medium">인천계양 속편한내과가 전해드리는 건강한 소식</p>
                        </div>
                        <Link href="/blog" className="text-accent font-bold hover:text-accent-dark flex items-center gap-1 transition-colors">
                            전체보기
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        {getAllPosts().slice(0, 3).map((latestPost) => (
                            <Link key={latestPost.slug} href={`/blog/${latestPost.slug}`} className="group block">
                                <div className="aspect-[16/10] bg-slate-100 rounded-2xl mb-4 overflow-hidden border border-slate-200 shadow-sm transition-all group-hover:shadow-md group-hover:-translate-y-1">
                                    {latestPost.coverImage ? (
                                        <img src={latestPost.coverImage} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300">
                                            <span className="text-4xl">🏥</span>
                                        </div>
                                    )}
                                </div>
                                <h3 className="font-bold text-slate-900 line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                                    {latestPost.title}
                                </h3>
                                <time className="text-xs text-slate-400 mt-2 block font-medium">{latestPost.date}</time>
                            </Link>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
