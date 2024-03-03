// 쿠키 가져오기
import cookie from 'cookie';

const getCookie = (key: string) => {
  const cookies = cookie.parse(document.cookie ?? '');
  const cookieObj = JSON.parse(cookies.USERINFO);

  return cookieObj[key];
};

export default getCookie;
