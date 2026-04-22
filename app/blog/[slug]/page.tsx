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
        <div className="min-h-screen bg-bg">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Back Navigation */}
            <div className="bg-white border-b border-slate-100 sticky top-20 z-40 shadow-sm">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <Link href="/blog" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-primary transition-colors">
                        <svg className="w-5 h-5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        건강정보 목록으로
                    </Link>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                {/* Article Header */}
                <header className="mb-16 text-center">
                    <div className="flex justify-center items-center gap-4 mb-8">
                        <span className="px-4 py-1 bg-accent text-white rounded-full text-xs font-black uppercase tracking-widest">
                            {post.tags?.[0] || '건강정보'}
                        </span>
                        <time className="text-slate-400 text-sm font-bold">
                            {post.date}
                        </time>
                    </div>

                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary leading-[1.2] mb-10 break-keep">
                        {post.title}
                    </h1>

                    {post.description && (
                        <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto break-keep italic">
                            &quot;{post.description}&quot;
                        </p>
                    )}
                </header>

                {/* Article Content */}
                <div className="bg-white rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sm:p-12 lg:p-16 mb-16">
                    <div className="prose prose-lg max-w-none
                        prose-headings:text-primary prose-headings:font-black
                        prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:pb-4 prose-h2:border-b prose-h2:border-slate-100
                        prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-6
                        prose-p:text-slate-600 prose-p:leading-loose prose-p:mb-8
                        prose-a:text-accent prose-a:font-bold prose-a:no-underline hover:prose-a:underline
                        prose-strong:text-primary prose-strong:font-black
                        prose-ul:text-slate-600 prose-li:marker:text-accent
                        prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-slate-50 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-slate-600 prose-blockquote:not-italic
                    ">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </div>

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                    <div className="mb-20">
                        <div className="flex flex-wrap gap-2 justify-center">
                            {post.tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="px-5 py-2 bg-slate-100 text-slate-500 rounded-xl text-xs font-bold hover:bg-primary hover:text-white transition-all cursor-default"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Author & Clinic Info */}
                <div className="bg-primary rounded-[40px] p-10 sm:p-14 mb-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
                    <div className="relative z-10 text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl text-primary font-black text-2xl">
                                S
                            </div>
                            <div>
                                <h3 className="text-2xl font-black mb-1">{CLINIC_NAME}</h3>
                                <p className="text-accent font-bold text-sm">25년 업력 · 전문의 6인 한 자리에서</p>
                            </div>
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-10 text-sm sm:text-base break-keep">
                            본 건강정보 콘텐츠는 환자분들의 이해를 돕기 위해 인천계양속편한내과에서 직접 작성하였습니다. 
                            정확한 진단과 치료는 환자의 증상과 상태에 따라 다를 수 있으므로, 반드시 내원하여 전문의와 상담하시기 바랍니다.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center justify-center sm:justify-start gap-3 text-white bg-white/5 py-4 px-6 rounded-2xl border border-white/10">
                                <span className="text-accent text-xl">📍</span>
                                <span className="text-sm font-bold">{CLINIC_ADDRESS}</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-3 text-white bg-white/5 py-4 px-6 rounded-2xl border border-white/10">
                                <span className="text-accent text-xl">📞</span>
                                <span className="text-sm font-bold">{CLINIC_PHONE}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
