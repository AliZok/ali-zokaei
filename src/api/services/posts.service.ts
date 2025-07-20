// src/services/posts.service.ts
import { api } from '@/api/fetcher';
import { Post } from '@/types';

export const getPosts = async (revalidate = 60) => {
    return api.get<Post[]>(`/posts`, {
        next: { revalidate },
    } as RequestInit);
};

export const getPostBySlug = async (slug: string, revalidate = 60) => {
    return api.get<Post>(`/posts/${slug}`, {
        next: { revalidate },
    } as RequestInit);
};

