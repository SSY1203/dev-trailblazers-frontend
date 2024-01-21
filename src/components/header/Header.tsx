const Header = () => {
  return (
    <header className="borderBottom">
      <div className="bg-gray-100 h-12">
        <div className="mx-auto flex justify-end items-center h-full max-w-[1000px] min-w-[900px]">
          <div className="grid grid-cols-3 gap-0">
            <a href="javascript:void(0)" className="subHeader">
              로그인
            </a>
            <a
              href="/mypage/edit/user/id"
              className="subHeader border-x border-gray-200 border-solid px-2 px "
            >
              마이페이지
            </a>
            <a href="javascript:void(0)" className="subHeader">
              FAQ
            </a>
          </div>
        </div>
      </div>
      <div className="min-w-[700px] max-w-[1000px] h-full py-12 mx-auto flex items-center gap-40">
        <h2 className="w-2/6 text-4xl font-black text-neutral-600 pl-4">
          <a href="/">Community</a>
        </h2>
        <div className="w-4/6 flex relative items-center pr-4">
          <input
            className="w-full py-4 border border-gray-200 rounded-lg border-solid px-5 text-sm"
            type="text"
          />
          <button className="absolute end-9">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
