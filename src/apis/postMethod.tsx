const postMethod = async (url: string, body?: string | FormData) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API}${url}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default postMethod;
