const deleteMethod = async (url: string) => {
  try {
    const result = await fetch(`${process.env.REACT_APP_API}${url}`, {
      method: 'DELETE',
      credentials: 'include',
    });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export default deleteMethod;
