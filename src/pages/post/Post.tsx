import { CommentCard, Layout } from '../../components';

const Post = () => {
  return (
    <Layout>
      <div className="p-[30px]">
        <div className="p-2.5 borderBottom">
          <div className="flex justify-between mb-[18px]">
            <span className="text-3xl font-medium text-zinc-600">
              코린이 코드 리뷰 부탁드립니다ㅠㅠㅠ
            </span>
            <span className="text-xs font-semibold text-zinc-400">
              2024/01/03
            </span>
          </div>
          <div className="flex justify-end">
            <span className="text-sm text-slate-700">OOO님</span>
          </div>
        </div>
        <div className="p-7 borderBottom">
          <div className="mb-[60px] min-h-[500px]">
            <p className="text-base text-slate-700">
              버튼 클릭 시, history로 페이지 이동하는 기능을 구현했습니다!
              이렇게 하는 게 맞나요?
            </p>
            <p className="text-base text-slate-700">
              아니면 더 좋게 짜는 방법이 있을까요? 조언 부탁드립니다~
            </p>
            <p className="text-base text-slate-700">
              React는 18버전 이용 중이고, 우선은 위 코드는 전체 코드의
              일부입니다! 다른 코드 부분이 필요하시다면 바로 올리겠습니다! 잘
              부탁드립니다! ㅎㅎㅎ
            </p>
          </div>
          <div className="flex justify-between">
            <div>
              <div className="flex gap-2">
                <div className="badge">frontend</div>
                <div className="badge">React</div>
                <div className="badge">비동기</div>
                <div className="badge">async await</div>
                <div className="badge">신입</div>
                <div className="badge">클린코드</div>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="basicButton bg-zinc-600 text-white">
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
          <CommentCard />
          <div className="basicBorder p-[20px] py-[10px]"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Post;
