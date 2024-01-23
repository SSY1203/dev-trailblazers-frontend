import { Layout } from '../../../components';
import GithubLogin from '../../../assets/github-login.svg';

const Login = () => {
  return (
    <Layout>
      <div className="center py-40">
        <form className="w-[368px] m-[30px] pt-[30px] mt-0 flex flex-col gap-40">
          <span className="text-center text-[36px] font-semibold">로그인</span>
          <a href="/signup">
            <img src={GithubLogin} alt="깃허브 로그인 버튼" />
          </a>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
