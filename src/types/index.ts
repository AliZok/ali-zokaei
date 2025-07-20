export type Post = {
  id: string;
  title: string;
  content: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

export type ApiResponse<T> = {
  data: T;
  error?: string;
  status: number;
};