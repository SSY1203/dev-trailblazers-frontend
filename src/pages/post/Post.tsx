import { useNavigate, useParams } from 'react-router-dom';
import { CommentCard, Editor, Layout } from '../../components';
import { useEffect, useState } from 'react';
import { PostType } from '../../types/PostType';

const Post = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const [postInfo, setPostInfo] = useState<PostType>({
    title: '',
    content: '',
    hashtags: '',
  });

  useEffect(() => {
    const onFetch = async () => {
      await onGetPost();
    };

    onFetch();
  }, []);

  const onGetPost = async () => {
    try {
      const result = await fetch(`http://localhost:8080/articles/id/${postId}`);
      const data = await result.json();
      setPostInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="p-[30px]">
        <div className="p-2.5 borderBottom">
          <div className="flex justify-between mb-[18px]">
            <span className="text-3xl font-medium text-zinc-600">
              {postInfo.title}
            </span>
            <span className="text-xs font-semibold text-zinc-400">
              {new Date(postInfo.createdAt ?? '').toLocaleString()}
            </span>
          </div>
          <div className="iconPosition gap-0">
            <span className="text-sm text-slate-700">{postInfo.id}님</span>
          </div>
        </div>
        <div className="p-7 borderBottom">
          <div
            className="mb-[60px] min-h-[500px]"
            dangerouslySetInnerHTML={{ __html: postInfo.content }}
          ></div>
          <div className="flex justify-between">
            <div>
              <div className="flex gap-2">
                <div className="badge">{postInfo.hashtags}</div>
                <div className="badge">React</div>
                <div className="badge">비동기</div>
                <div className="badge">async await</div>
                <div className="badge">신입</div>
                <div className="badge">클린코드</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                className="basicButton bg-zinc-600 text-white"
                onClick={() => navigate(`/post/edit/${postId}`)}
              >
                수정
              </button>
              <button className="basicButton">삭제</button>
            </div>
          </div>
        </div>
        {/* 댓글 시작 */}
        <div className="px-[12px] py-[20px] flex flex-col gap-[16px]">
          <CommentCard />
          <CommentCard type="reply" />
          <CommentCard />
          <CommentCard type="reply" userId="a" />
          <CommentCard />
          <div className="basicBorder p-[20px] py-[10px] h-[420px] relative">
            <div>
              <Editor height={'300px'} />
            </div>
            <div className="absolute right-[20px] bottom-[12px] iconPosition ">
              <button className="basicButton bg-zinc-600 text-white">
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
