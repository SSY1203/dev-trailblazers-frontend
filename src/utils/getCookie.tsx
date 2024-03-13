// 쿠키 패키지를 이용해 cookie에 저장된 객체 파싱하여 가져오기
import cookie from 'cookie';

const getCookie = (key: string) => {
  const cookies = cookie.parse(document.cookie ?? '');
  const cookieObj = JSON.parse(cookies.USERINFO ?? '{}');

  return cookieObj[key];
};

export default getCookie;
