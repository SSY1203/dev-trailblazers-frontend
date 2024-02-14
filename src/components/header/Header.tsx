import { useState } from 'react';
import { SIZE, SORT_FIELD } from '../../data';

interface HeaderType {
  setPosts?: any;
}

const Header = ({ setPosts }: HeaderType) => {
  const [search, setSearch] = useState('');

  // 검색
  const onSearch = async (event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      event.preventDefault();
      const result = await fetch(
        `/articles/keyword/${search}?page=0&size=${SIZE}&sort=${SORT_FIELD}`
      );
      const json = await result.json();
      setPosts(json);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="borderBottom">
      <div className="bg-gray-100 h-12">
        <div className=" iconPosition gap-0 items-center  contentsWidth">
          <div className="grid grid-cols-3 gap-0">
            <a href="/login" className="subHeader">
              로그인
            </a>
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
