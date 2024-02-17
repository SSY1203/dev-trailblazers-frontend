export interface CommentType {
  articleId: number;
  userId?: number;
  content: string;
  createdAt: string;
  id: number;
  modifiedAt: string;
  modifiedBy: number;
  parentCommentId: number | null;
}

export interface PostType {
  id?: string;
  title: string;
  content: string;
  hashtags: string;
  createdAt?: string;
  modifiedAt?: string;
  modifiedBy?: number;
  commentDtos?: CommentType[];
}
