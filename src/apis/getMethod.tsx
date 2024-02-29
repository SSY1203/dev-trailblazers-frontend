const getMethod = async (url: string) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API}${url}`);

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default getMethod;
