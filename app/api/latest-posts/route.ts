import { NextResponse } from 'next/server';
import { getAllPosts } from '@/lib/blog';

export async function GET() {
    try {
        const posts = getAllPosts();
        // Return only the 6 most recent posts
        const latestPosts = posts.slice(0, 6).map(post => ({
            title: post.title,
            description: post.description,
            date: post.date,
            tags: post.tags,
            slug: post.slug
        }));
        
        return NextResponse.json(latestPosts);
    } catch (error) {
        console.error('Failed to fetch latest posts:', error);
        return NextResponse.json([], { status: 500 });
    }
}
