import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie } from '../../utils';
import { postMethod } from '../../apis';

const Header = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [nickname, setNickname] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await getUser();
    };

    fetchData();
  }, []);

  const getUser = async () => {
    try {
      const cookie = getCookie('USERINFO');

      if (cookie) {
        setNickname(cookie);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 검색(단, 검색어 길이는 30글자 미만)
  const onSearch = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();

      if (search.length > 30) {
        alert('검색어는 30글자 미만이어야 합니다.');
        return;
      }

      navigate(`/inquiry/${search}`);
    } catch (error) {
      console.log(error);
    }
  };

  // 로그아웃
  // TODO 로딩 구현
  // TODO credentials: 'include' 블로그 쓰기
  const onLogout = async () => {
    try {
      await postMethod('/logout').then((res) => {
        // 서버에서 쿠키를 어떠한 오류로 인해 지우지 못했을 경우,
        // 지워지지 않은 JSESSIONID를 통해 서버에게 요청을 보내면
        // 서버가 만료된 ID라는 응답을 줌
        // 만료된 ID라는 응답을 받을 경우, 클라이언트에서 직접 쿠키를 모두 삭제
        // 실제 실패 사유가 있어야 로직 처리 가능 -> 나중에 소통해보기
        alert('로그아웃 되었습니다.');
        navigate('/login');
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="borderBottom">
      <div className="bg-gray-100 h-12">
        <div className=" iconPosition gap-0 items-center  contentsWidth">
          <div className={`flex gap-[10px]`}>
            {nickname ? (
              <span className="subHeader">{nickname}님</span>
            ) : (
              <a href="/login" className="subHeader">
                로그인
              </a>
            )}
            {nickname && (
              <button
                onClick={onLogout}
                className="subHeader inlineBorder border-r-0 px-2"
              >
                로그아웃
              </button>
            )}
            <a
              href="/mypage/edit/user/id"
              className="subHeader inlineBorder px-2"
            >
              마이페이지
            </a>
            <a href="javascript:void(0)" className="subHeader">
              FAQ
            </a>
          </div>
        </div>
      </div>
      <div className="contentsWidth min-w-[700px] py-12  iconAndText gap-40">
        <h2 className="w-2/6 text-4xl font-black text-neutral-600 pl-4">
          <a href="/">Community</a>
        </h2>
        <form className="w-4/6 flex relative items-center pr-4">
          <input
            className="basicButton w-full py-4 px-5 text-sm"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <button
            onClick={(event) => onSearch(event)}
            className="absolute end-9"
          >
            <span className="material-symbols-outlined">search</span>
          </button>
        </form>
      </div>
    </header>
  );
};

export default Header;
