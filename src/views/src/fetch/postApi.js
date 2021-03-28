const postApi = async (request) => {

  try {

    const response = await fetch(request);
    const responseData = await responsel.json();
    const { success, message, results } = responseData;

    if(!success) {
      throw Error(message);
    } else if(!response.ok) {
      throw Error('Could not complete post.');
    }

    return { success, message, results } 


  } catch(err) {

    return err.message;

  }

}

export default postApi;