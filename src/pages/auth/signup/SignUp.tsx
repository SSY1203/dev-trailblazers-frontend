import { useState } from 'react';
import { Layout } from '../../../components';

const SignUp = () => {
  const [phone, setPhone] = useState('');

  //   회원가입 요청 uri : /auth/join
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="center py-32">
        <form
          onSubmit={onSubmit}
          className="w-[368px] m-[30px] pt-[30px] mt-0 flex flex-col"
        >
          <span className="text-center text-[36px] font-semibold">
            회원가입
          </span>
          <div className="flex flex-col justify-center gap-2 mt-[40px]">
            <label htmlFor="email" className="text-[18px] font-semibold">
              아이디(이메일)
            </label>
            <input
              id="email"
              type="email"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="labelInput">
            <label htmlFor="password" className="text-[18px] font-semibold">
              비밀번호
            </label>
            <input
              id="password"
              type="password"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="labelInput">
            <label
              htmlFor="passwordCheck"
              className="text-[18px] font-semibold"
            >
              비밀번호 확인
            </label>
            <input
              id="passwordCheck"
              type="password"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="labelInput">
            <label htmlFor="nickname" className="text-[18px] font-semibold">
              닉네임
            </label>
            <input
              id="nickname"
              type="text"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="labelInput">
            <label htmlFor="username" className="text-[18px] font-semibold">
              이름
            </label>
            <input
              id="username"
              type="text"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="labelInput">
            <label htmlFor="age" className="text-[18px] font-semibold">
              나이
            </label>
            <input
              id="age"
              type="number"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="flex flex-col gap-2 mt-[10px]">
            <label htmlFor="gender" className="text-[18px] font-semibold">
              성별
            </label>
            <div
              id="gender"
              className="flex justify-between basicBorder px-[60px] py-[15px]"
            >
              <div className="iconAndText">
                <input
                  id="man"
                  name="gender"
                  value={'man'}
                  type="radio"
                  className="basicBorder px-[15px] py-[15px]"
                />
                <label htmlFor="men">남성</label>
              </div>
              <div className="iconAndText">
                <input
                  id="woman"
                  name="gender"
                  value={'woman'}
                  type="radio"
                  className="basicBorder px-[15px] py-[15px]"
                />
                <label htmlFor="woman">여성</label>
              </div>
            </div>
          </div>
          <div className="labelInput">
            <label htmlFor="phone" className="text-[18px] font-semibold">
              전화번호
            </label>
            <input
              id="phone"
              type="text"
              maxLength={13}
              className="basicBorder px-[15px] py-[15px]"
              value={phone}
              onChange={(event) =>
                setPhone(
                  event.target.value
                    .replace(/[^0-9]/g, '')
                    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
                    .replace(/(-{1,2})$/g, '')
                )
              }
            />
          </div>
          <div className="labelInput">
            <label htmlFor="area" className="text-[18px] font-semibold">
              지역
            </label>
            <input
              id="area"
              type="text"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <div className="labelInput">
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
          <div className="labelInput">
            <label htmlFor="jobRole" className="text-[18px] font-semibold">
              개발 직군
            </label>
            <input
              id="jobRole"
              type="text"
              className="basicBorder px-[15px] py-[15px]"
            />
          </div>
          <button className="basicBorder mt-[40px] px-auto py-[15px] bg-[#555555] text-white text-[16px] font-semibold">
            가입하기
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
