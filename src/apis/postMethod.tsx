const postMethod = async (url: string, body?: string | FormData) => {
  try {
    const headers =
      typeof body === 'string'
        ? {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        : {};

    const result = await fetch(`${process.env.REACT_APP_API}${url}`, {
      method: 'POST',
      credentials: 'include',
      ...headers,
      body,
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default postMethod;
