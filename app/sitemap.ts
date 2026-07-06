import { MetadataRoute } from 'next';
import { getAllPosts } from '@/lib/blog';
import { SITE_URL } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getAllPosts();

    const blogPosts = posts.map((post) => ({
        url: `${SITE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.date).toISOString().split('T')[0],
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    const routes = [
        {
            url: `${SITE_URL}`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 1.0,
        },
        {
            url: `${SITE_URL}/blog`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${SITE_URL}/services`,
            lastModified: new Date().toISOString().split('T')[0],
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    return [...routes, ...blogPosts];
}
