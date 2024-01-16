const Header = () => {
  return (
    <header className="border-b border-gray-200 border-solid">
      <div className="bg-gray-100 h-12">
        <div className="mx-auto flex justify-end items-center w-8/12 h-full">
          <div className="grid grid-cols-3 gap-0">
            <button className="text-center text-gray-400 text-sm">
              로그인
            </button>
            <button className="border-x px-2 px text-center text-gray-400 text-sm">
              마이페이지
            </button>
            <button className="text-center text-gray-400 text-sm">FAQ</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full py-12 mx-auto flex items-center gap-40">
        <h2 className="text-4xl font-black text-neutral-600">
          Code
          <br />
          Review
        </h2>
        <div className="w-3/6 flex relative items-center">
          <input
            className="w-full py-4 border border-gray-200 rounded-lg border-solid px-5 text-sm"
            type="text"
          />
          <button className="absolute end-5">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
