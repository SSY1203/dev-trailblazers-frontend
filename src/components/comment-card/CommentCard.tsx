import { useEffect, useState } from 'react';
import { CommentType } from '../../types/PostType';
import { onGetTimeDifference } from '../../utils';

interface CommentPropType {
  userId?: string;
  comment: CommentType;
}

const CommentCard = ({ comment }: CommentPropType) => {
  const {
    id,
    content,
    userId,
    articleId,
    createdAt,
    modifiedAt,
    modifiedBy,
    parentCommentId,
  } = comment;

  const [ago, setAgo] = useState<number | string>('');

  useEffect(() => {
    const time = onGetTimeDifference(createdAt);

    setAgo(time);
  }, []);

  return (
    <div className="iconAndText gap-0">
      {parentCommentId && (
        <span className="material-symbols-outlined px-[18px]">
          subdirectory_arrow_right
        </span>
      )}
      <div
        className={`${
          parentCommentId ? 'bg-white' : 'bg-[#fafafa]'
        } basicBorder p-[20px] py-[10px] pt-[12px] grow`}
      >
        <div className="flex justify-between items-center mb-[16px]">
          <span className="text-[14px]">{userId}님</span>
          <div className="iconAndText gap-4">
            {userId && (
              <div className="mt-[8px] iconPosition gap-[10px]">
                <button>
                  <span className=" material-symbols-outlined iconSize">
                    edit
                  </span>
                </button>
                <button>
                  <span className=" material-symbols-outlined iconSize">
                    delete
                  </span>
                </button>
              </div>
            )}
            <span className="text-[12px] text-semiBold text-[#999999]">
              {ago}
            </span>
            {!userId && <button className="basicButton bg-white">채택</button>}
          </div>
        </div>
        <span className="text-[14px]">{content}</span>
        <div className="mt-[8px] iconPosition gap-[10px]">
          <button className="iconAndText">
            <span className=" material-symbols-outlined iconSize">
              thumb_up
            </span>
            <span className="text-[14px] font-medium">20</span>
          </button>
          <button className="iconAndText">
            <span className=" material-symbols-outlined iconSize">chat</span>
            <span className="text-[14px] font-medium">20</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
