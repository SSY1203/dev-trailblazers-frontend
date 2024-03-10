import { postMethod } from '../apis';

const logOut = async () => {
  try {
    await postMethod('/logout');
  } catch (error) {
    console.log(error);
  }
};
export default logOut;
