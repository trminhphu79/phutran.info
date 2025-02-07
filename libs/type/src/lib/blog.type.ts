export type Blog = {
  id: string;
  title: string;
  content: string;
  tag: string[];
  authorId: string | null;
  createdAt: string;
  updatedAt: string;
  author: string | null;
};
