const getMethod = async (url: string) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API}${url}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return result;
  } catch (error) {
    console.error(error);
  }
};

export default getMethod;
