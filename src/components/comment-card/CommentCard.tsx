import { useEffect } from 'react';
import { CommentType } from '../../types/PostType';

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

  useEffect(() => {
    const current = new Date().getTime();
    const past = new Date(createdAt).getTime();
    const diff = current - past;
    console.log(diff);
  }, []);

  return (
    <div className="iconAndText gap-0">
      {content === 'reply' && (
        <span className="material-symbols-outlined px-[18px]">
          subdirectory_arrow_right
        </span>
      )}
      <div
        className={`${
          content === 'reply' ? 'bg-white' : 'bg-[#fafafa]'
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
              2분 전
            </span>
            {!userId && <button className="basicButton bg-white">채택</button>}
          </div>
        </div>
        <span className="text-[14px]">
          이 부분은 이렇게 쓰는게 좋고, 이건 되도록 사용하지 않는 게 좋아요! 그
          외 부분은 잘 쓰셨네요 ㅎㅎ
          <br /> 저도 잘 하는 편은 아니지만 이 정도면 충분히 잘 개선해 나갈 수
          있을 것 같아요
        </span>
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
