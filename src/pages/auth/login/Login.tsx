import { Layout } from '../../../components';
import GithubLogin from '../../../assets/github-login.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({ email: '', password: '' });

  const onLogin = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();

      fetch(`http://localhost:8080/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          // loginInfo
          {
            email: 'testuser1@example.com',
            password: '1234',
          }
        ),
      }).then((res) => {
        console.log(res);

        if (res.status === 200) {
          alert('로그인 성공했습니다.');
          navigate('/');
          return;
        }

        if (res.status === 403) {
          throw new Error('아이디 혹은 비밀번호가 일치하지 않습니다.');
        } else {
          alert('로그인에 실패했습니다.');
          return;
        }
      });
    } catch (e: any) {
      alert(e.message);
    }
  };

  return (
    <Layout>
      <div className="center py-40 flex-col">
        <span className="text-center text-[36px] font-semibold">로그인</span>
        <form
          action="submit"
          onSubmit={onLogin}
          className="w-[368px] m-[30px] pt-[30px] mt-0 flex flex-col gap-0 mb-[50px]"
        >
          <div className="labelInput">
            <label htmlFor="loginId" className="text-[18px] font-semibold">
              아이디
            </label>
            <input
              // required
              id="loginId"
              type="email"
              className="basicBorder px-[15px] py-[15px]"
              value={loginInfo.email}
              onChange={(event) =>
                setLoginInfo((prev) => ({ ...prev, email: event.target.value }))
              }
            />
          </div>
          <div className="labelInput">
            <label
              htmlFor="loginPassword"
              className="text-[18px] font-semibold"
            >
              비밀번호
            </label>
            <input
              // required
              id="loginPassword"
              type="password"
              className="basicBorder px-[15px] py-[15px]"
              value={loginInfo.password}
              onChange={(event) =>
                setLoginInfo((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
            />
          </div>
          <button className="basicBorder mt-[40px] px-auto py-[15px] bg-[#555555] text-white text-[16px] font-semibold">
            로그인
          </button>
        </form>
        <a href="/signup">
          <img src={GithubLogin} alt="깃허브 로그인 버튼" />
        </a>
      </div>
    </Layout>
  );
};

export default Login;
