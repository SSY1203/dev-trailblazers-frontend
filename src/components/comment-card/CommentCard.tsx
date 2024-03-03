import { useEffect, useState } from 'react';
import { CommentType } from '../../types/PostType';
import { getCookie, getTimeDifference } from '../../utils';
import DOMPurify from 'isomorphic-dompurify';
import { deleteMethod, postMethod, putMethod } from '../../apis';
import Editor from '../editor/Editor';

interface CommentPropType {
  comment: CommentType;
  childComments?: CommentType[] | null;
  childCount?: number;
  currentUserId?: number | undefined;
}

const CommentCard = ({
  comment,
  childCount,
  currentUserId,
  childComments,
}: CommentPropType) => {
  const {
    id,
    content,
    userId,
    articleId,
    createdAt,
    modifiedAt,
    modifiedBy,
    parentCommentId,
    isRemoved,
  } = comment;

  const [ago, setAgo] = useState<number | string>('');
  const [editAgo, setEditAgo] = useState<number | string>('');
  const [isLogin, setIsLogin] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [commentInfo, setCommentInfo] = useState({
    parentCommentId,
    content,
  });
  const [isComment, setIsComment] = useState(false);
  const [childCommentInfo, setChildCommentInfo] = useState<{
    parentCommentId: number | null;
    content: string;
  }>({ parentCommentId: id, content: '' });

  useEffect(() => {
    const createdTime = getTimeDifference(createdAt);
    const pastTime = getTimeDifference(modifiedAt);
    const cookie = getCookie('userId') ? true : false;

    setIsLogin(cookie);
    setAgo(createdTime);
    setEditAgo(pastTime);
  }, []);

  const onDeleteComment = async () => {
    try {
      if (childComments && childComments.length > 0) {
        alert('대댓글이 달린 댓글을 삭제할 수 없습니다.');
        return;
      }

      if (
        !confirm(
          '댓글을 삭제하시겠습니까? 한 번 삭제된 댓글은 복구하실 수 없습니다.'
        )
      ) {
        return;
      }

      if (parentCommentId || (childComments && childComments.length === 0)) {
        await deleteMethod(`/comments/id/${id}`);
      }

      alert('삭제되었습니다.');
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const onEditComment = async () => {
    try {
      await putMethod(`/comments/id/${id}`, commentInfo.content);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const onCreateChildComment = async () => {
    try {
      if (childCommentInfo.content.length === 0) {
        alert('댓글을 입력해 주세요.');
        return;
      }

      await postMethod(
        `/comments`,
        JSON.stringify({ ...childCommentInfo, articleId })
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="iconAndText gap-0">
        {parentCommentId && (
          <span className="material-symbols-outlined px-[18px]">
            subdirectory_arrow_right
          </span>
        )}
        {/* 댓글 수정 유무에 따른 렌딩 */}
        {isEdit ? (
          <div className="basicBorder p-[20px] pb-[10px] h-[440px] relative mt-[20px] w-full">
            <Editor
              height={'300px'}
              value={commentInfo.content}
              onChange={(value) => {
                setCommentInfo((prev) => ({ ...prev, content: value }));
              }}
            />
            <button
              className="basicButton bg-zinc-600 text-white absolute bottom-4 right-5"
              onClick={onEditComment}
            >
              수정
            </button>
          </div>
        ) : (
          <div
            className={`${
              parentCommentId ? 'bg-white' : 'bg-[#fafafa]'
            } basicBorder p-[20px] py-[10px] pt-[12px] grow`}
          >
            <div className="flex justify-between items-center mb-[16px]">
              <span className="text-[14px]">
                {userId}님{' '}
                {createdAt !== modifiedAt && (
                  <span className="text-[12px] text-zinc-400">
                    ({editAgo} 수정)
                  </span>
                )}
              </span>
              <div className="iconAndText gap-4">
                {isLogin && currentUserId === userId && (
                  <div className="mt-[8px] iconPosition gap-[10px]">
                    <button onClick={() => setIsEdit((prev) => !prev)}>
                      <span className=" material-symbols-outlined iconSize">
                        edit
                      </span>
                    </button>
                    <button onClick={onDeleteComment}>
                      <span className=" material-symbols-outlined iconSize">
                        delete
                      </span>
                    </button>
                  </div>
                )}
                <span className="text-[12px] text-semiBold text-[#999999]">
                  {ago}
                </span>
              </div>
            </div>
            {/* 삭제 유무에 따른 댓글 렌딩  */}
            {isRemoved && isRemoved ? (
              <span className="text-[14px]">삭제된 댓글입니다.</span>
            ) : (
              <div
                className="text-[14px]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(content),
                }}
              />
            )}
            <div className="mt-[8px] iconPosition gap-[10px]">
              <button className="iconAndText">
                <span className=" material-symbols-outlined iconSize">
                  thumb_up
                </span>
                <span className="text-[14px] font-medium">20</span>
              </button>
              {!parentCommentId && (
                <button
                  className="iconAndText"
                  onClick={() => setIsComment((prev) => !prev)}
                >
                  <span className=" material-symbols-outlined iconSize">
                    chat
                  </span>
                  <span className="text-[14px] font-medium">{childCount}</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      {/* 대댓글 달기 */}
      {isComment && (
        <div className="flex items-center">
          <span className="material-symbols-outlined px-[18px]">
            subdirectory_arrow_right
          </span>
          <div className="basicBorder p-[20px] pb-[10px] h-[440px] relative mt-[20px] w-full">
            <Editor
              height={'300px'}
              value={childCommentInfo.content}
              onChange={(value) => {
                setChildCommentInfo((prev) => ({ ...prev, content: value }));
              }}
            />
            <button
              className="basicButton bg-zinc-600 text-white absolute bottom-4 right-5"
              onClick={onCreateChildComment}
            >
              게시
            </button>
          </div>
        </div>
      )}
      {/* 대댓글 있을 경우 */}
      {childComments
        ? childComments.map((childComment) => (
            <CommentCard
              key={childComment.id}
              comment={childComment}
              currentUserId={userId}
            />
          ))
        : null}
    </>
  );
};

export default CommentCard;
