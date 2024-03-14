import axios from "axios";

export const login = async (id, pw, navigate) => {
  try {
    const result = await axios.post("/log-in", { email: id, password: pw });
    console.log(result);
    const { accessToken } = result;
    localStorage.setItem("accessToken", accessToken);
    navigate("/");
    return result.data;
  } catch (error) {
    if (error.response.status === 401) {
      alert(error.response.data.message);
    }
    return error.response;
  }
};
