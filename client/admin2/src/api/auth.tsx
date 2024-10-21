export const createUser = async (data) => {
  try {
    const response = await fetch("http://localhost:5001/auth/sign-up",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}
