import { useLocation, useParams } from 'react-router-dom';
import { Layout } from '../../components';

const MyPage = ({ children }: any) => {
  const { pathname } = useLocation();
  const { category } = useParams();

  return (
    <Layout>
      <div className="p-[30px]">
        <div className="flex items-center gap-4 pb-2 px-2 borderBottom">
          <a
            className={`text-[18px] font-medium ${pathname === '/mypage/edit/user/id' && 'text-red-400'}`}
            href="/mypage/edit/user/id"
          >
            회원 정보 수정
          </a>
          <span>|</span>
          <a
            className={`text-[18px] font-medium  ${category === 'posts' && 'text-red-400'}`}
            href="/mypage/user/id/posts"
          >
            내가 쓴 게시글 조회
          </a>
          <span>|</span>
          <a
            className={`text-[18px] font-medium ${category === 'comment' && 'text-red-400'}`}
            href="/mypage/user/id/comment"
          >
            채택된 댓글 조회
          </a>
        </div>
        {children}
      </div>
    </Layout>
  );
};

export default MyPage;
