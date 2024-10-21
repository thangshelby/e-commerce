
export const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:5001/user/users");
      return response.json();
    }
    catch (error) {
      return error.response.data;
    }
}