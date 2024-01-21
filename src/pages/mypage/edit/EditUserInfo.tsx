import MyPage from '../MyPage';

const EditUserInfo = () => {
  return (
    <MyPage>
      <form className="p-[20px] mt-[80px] w-[450px] mx-auto">
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="nickname" className="text-[18px] font-semibold">
            닉네임
          </label>
          <input
            id="nickname"
            type="text"
            className="basicBorder px-[15px] py-[15px]"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 mt-[10px]">
          <label htmlFor="area" className="text-[18px] font-semibold">
            지역
          </label>
          <input
            id="area"
            type="text"
            className="basicBorder px-[15px] py-[15px]"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 mt-[10px]">
          <label
            htmlFor="experienceLevel"
            className="text-[18px] font-semibold"
          >
            개발 연차
          </label>
          <input
            id="experienceLevel"
            type="text"
            className="basicBorder px-[15px] py-[15px]"
          />
        </div>
        <div className="flex flex-col justify-center gap-2 mt-[10px]">
          <label htmlFor="jobRole" className="text-[18px] font-semibold">
            개발 직군
          </label>
          <input
            id="jobRole"
            type="text"
            className="basicBorder px-[15px] py-[15px]"
          />
        </div>
        <div className="flex justify-center items-center gap-4 my-[48px]">
          <button className="basicBorder w-[160px] px-auto py-[15px] bg-[#555555] text-white text-[16px] font-semibold">
            저장
          </button>
          <button className="basicBorder w-[160px] px-auto py-[15px]  text-[16px] font-semibold">
            회원 탈퇴
          </button>
        </div>
      </form>
    </MyPage>
  );
};

export default EditUserInfo;
