import { useEffect, useState } from 'react';
import { PostType } from '../../types/PostType';

interface PostCardPropType {
  post: PostType;
  style?: string;
}

const PostCard = ({ post, style = 'borderBottom' }: PostCardPropType) => {
  return (
    <a
      href={`/post/${post.id}`}
      className={`w-full px-6 pt-6 pb-4  flex flex-col gap-9 ${style}`}
    >
      <div className="w-full flex flex-col items-start gap-3">
        <div className="flex justify-between w-full">
          <span className="text-sm text-zinc-600">{post.userId}님</span>
          <span className="text-zinc-400 font-medium text-sm">
            {new Date(post.createdAt ?? '').toLocaleString()}
          </span>
        </div>
        <span className="text-zinc-600 text-lg font-medium">{post.title}</span>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          <div className="badge">{post.hashtags}</div>
          <div className="badge">React</div>
          <div className="badge">비동기</div>
          <div className="badge">async await</div>
          <div className="badge">신입</div>
          <div className="badge">클린코드</div>
        </div>
        <div className="iconPosition gap-2">
          <div className="likeAndChat">
            <span className="material-symbols-outlined">visibility</span>
            <span>16</span>
          </div>
          <div className="likeAndChat">
            <span className="material-symbols-outlined">sms</span>
            <span>{post.commentCount}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default PostCard;
