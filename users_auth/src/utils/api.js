import axios from "axios";

export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(token) {
  return localStorage.setItem("token", token)
}


export function api() {
  return axios.create({
    baseURL: "http://localhost:4000",
    // withCredentials: true,
    headers: {
      Authorization: getToken(),
      "Content-Type": "application/json"
    }
  });
}

// export const LoginUser = async (credentials) => {
//   const res = await api().post("/api/auth/login", credentials)
//   setToken(res.data.token)
//   return res.data
// }

export const LoginUser = async (credentials) => {
  const res = await api().post("/api/auth/login", credentials)
  setToken(res.data.token)
  return res.data }

export const SignupUser = async (user) => {
  const res = await api().post("/api/auth/register", user)
  return res.data
}

export const GetUsers = async () => {
  const res = await api().get("/api/users")
  return res.data
}

//   export function login (credentials, res) {
//       return api().post("/api/auth/login", 
//       credentials, 
//       setToken(res.data.token))
//   }
