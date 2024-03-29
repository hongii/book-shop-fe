import { LoginProps } from "@/pages/LoginPage";
import { ResetProps } from "@/pages/ResetPasswordPage";
import { JoinProps } from "@/pages/JoinPage";
import { httpClient } from "@/api/http";

export const join = async (userData: JoinProps) => {
  try {
    const { data } = await httpClient.post("/users/join", userData);
    return data;
  } catch (err: any) {
    throw err;
  }
};

export const login = async (userData: LoginProps) => {
  try {
    const res = await httpClient.post("/users/login", userData);
    const authorizationHeader = res.headers?.authorization;
    // Authorization 헤더가 존재하는지 확인
    if (authorizationHeader) {
      // Bearer 토큰 스킴을 제거하고 access token을 추출
      const accessToken = authorizationHeader.replace("Bearer ", "");
      return { ...res.data, accessToken };
    }
  } catch (err: any) {
    throw err;
  }
};

export const resetPasswordRequest = async (userData: ResetProps) => {
  try {
    const { data } = await httpClient.post("/users/reset", userData);
    return data;
  } catch (err: any) {
    throw err;
  }
};

export const resetPassword = async (userData: ResetProps) => {
  try {
    const { data } = await httpClient.put("/users/reset", userData);
    return data;
  } catch (err: any) {
    throw err;
  }
};

export const logout = async () => {
  try {
    const { data } = await httpClient.post("/users/logout");
    return data;
  } catch (err: any) {
    throw err;
  }
};
