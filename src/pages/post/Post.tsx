import { useNavigate, useParams } from 'react-router-dom';
import { CommentCard, Editor, Layout } from '../../components';
import { useEffect, useState } from 'react';
import { CommentType, PostType } from '../../types/PostType';
import { deleteMethod, getMethod, postMethod } from '../../apis';
import DOMPurify from 'isomorphic-dompurify';
import { getCookie } from '../../utils';

const Post = () => {
  const navigate = useNavigate();
  const { postId } = useParams();

  const [postInfo, setPostInfo] = useState<PostType>({
    title: '',
    content: '',
    hashtags: '',
  });
  const [comments, setComments] = useState<
    { parentComment: CommentType; childComments: CommentType[] | null }[]
  >([]);

  const [commentInfo, setCommentInfo] = useState({
    parentCommentId: null,
    content: '',
  });
  const [userId, setUserInfo] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      await getPost();
      await getUser();
    };

    fetchData();
  }, []);

  const getPost = async () => {
    try {
      const result = await getMethod(`/articles/id/${postId}`);
      const data = await result?.json();

      const parentComments: CommentType[] = data.commentDtos
        .filter((comment: CommentType) => !comment.parentCommentId)
        .sort(
          (a: CommentType, b: CommentType) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      const childComments: CommentType[] = data.commentDtos
        .filter((comment: CommentType) => comment.parentCommentId)
        .sort(
          (a: CommentType, b: CommentType) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );

      const combineComments: {
        parentComment: CommentType;
        childComments: CommentType[] | null;
      }[] = [];

      for (const parent of parentComments) {
        const filterChild = childComments.filter(
          (comment: CommentType) => comment.parentCommentId === parent.id
        );
        const comment = { parentComment: parent, childComments: filterChild };
        combineComments.push(comment);
      }

      setComments(combineComments);
      setPostInfo(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    const id = getCookie('userId');
    setUserInfo(+id);
  };

  // Dto : Data Transfer Object
  // 삭제
  const onDeletePost = async () => {
    try {
      if (
        !confirm(
          '해당 게시글을 삭제하시겠습니까? \n한 번 삭제한 게시글은 복구하실 수 없습니다.'
        )
      ) {
        return;
      }
      await deleteMethod(`/articles/id/${postId}`);

      alert('삭제되었습니다.');
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 추가
  const onCreateComment = async () => {
    try {
      await postMethod(
        `/comments`,
        JSON.stringify({ ...commentInfo, articleId: postId })
      );

      setCommentInfo((prev) => ({ ...prev, content: '' }));
      await getPost();
    } catch (error: any) {
      console.log(error);
      alert('로그인 후 이용하실 수 있습니다.');
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
            <span className="text-sm text-slate-700">{postInfo.userId}님</span>
          </div>
        </div>
        <div className="p-7 borderBottom">
          <div
            className="mb-[60px] min-h-[500px] view ql-editor"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(postInfo.content),
            }}
          ></div>
          <div className="flex justify-between">
            <div>
              <div className="flex gap-2">
                <a href="javascript:void(0)" className="badge">
                  {postInfo.hashtags}
                </a>
                <a href="javascript:void(0)" className="badge">
                  React
                </a>
                <a href="javascript:void(0)" className="badge">
                  비동기
                </a>
                <a href="javascript:void(0)" className="badge">
                  async await
                </a>
                <a href="javascript:void(0)" className="badge">
                  신입
                </a>
                <a href="javascript:void(0)" className="badge">
                  클린코드
                </a>
              </div>
            </div>
            {userId === postInfo.userId && (
              <div className="flex gap-4">
                <button
                  className="basicButton bg-zinc-600 text-white"
                  onClick={() => navigate(`/post/edit/${postId}`)}
                >
                  수정
                </button>
                <button onClick={onDeletePost} className="basicButton">
                  삭제
                </button>
              </div>
            )}
          </div>
        </div>
        {/* 댓글 시작 */}
        <div className="basicBorder p-[20px] pb-[10px] h-[440px] relative mt-[20px] ">
          <span className="block pl-[10px] pt-[5px] font-medium">
            댓글 달기
          </span>
          <div className="absolute right-[20px] top-[12px] iconPosition ">
            <button
              className="basicButton bg-zinc-600 text-white"
              onClick={onCreateComment}
            >
              등록
            </button>
          </div>
          <div className="mt-[30px]">
            <Editor
              height={'300px'}
              value={commentInfo.content}
              onChange={(value) => {
                setCommentInfo((prev) => ({ ...prev, content: value }));
              }}
            />
          </div>
        </div>
        <div className="borderBottom py-[10px]"></div>
        <div className="px-[12px] py-[20px] flex flex-col gap-[16px]">
          {comments && comments.length > 0 ? (
            comments.map((comment) => (
              <>
                <CommentCard
                  key={comment.parentComment.id}
                  comment={comment.parentComment}
                  childCount={comment.childComments?.length}
                  currentUserId={userId}
                  childComments={comment.childComments}
                />
              </>
            ))
          ) : (
            <span className="flex justify-center items-center h-[250px]">
              등록된 댓글이 없습니다.
            </span>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
