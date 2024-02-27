// 쿠키 가져오기
const getCookie = (key: string) => {
  let value: string | null = null;
  const cookies = document.cookie.split(';');
  cookies.find((cookie) => {
    cookie = cookie.replace(' ', '');

    const tuple = cookie.split('=');

    if (key === tuple[0]) {
      value = tuple[1];
      return true;
    }
  });

  return value;
};

export default getCookie;
