import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: [
                    'GPTBot',
                    'OAI-SearchBot',
                    'ChatGPT-User',
                    'ClaudeBot',
                    'Claude-Web',
                    'anthropic-ai',
                    'PerplexityBot',
                    'Perplexity-User',
                    'Google-Extended',
                    'Googlebot',
                    'Bingbot',
                    'Yeti',
                    'Applebot',
                    'Applebot-Extended',
                    'CCBot',
                    'cohere-ai',
                    'Meta-ExternalAgent',
                ],
                allow: '/',
            },
        ],
        sitemap: `${SITE_URL}/sitemap.xml`,
        host: SITE_URL,
    };
}
