import request from "./requet";

interface Data {
  name: string;
  password: string | number;
}
//注册
const register = "/users";

export const registerUser = async (data: Data) => {
  const result = await request.post(register, data);
  return result.data;
};

// 登录

const login = "/login";

export const loginUser = async (data: Data) => {
  const result = await request.post(login, data);
  return result.data;
};
