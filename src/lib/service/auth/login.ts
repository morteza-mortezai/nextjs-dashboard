import { api } from "../api";
import { ILoginResponse } from "./types/loginResponse";
import { ILoginBody } from "./types/loginBody";

export async function loginService(body: ILoginBody) {
  const data = await api.post<ILoginResponse>("/auth/sign-in", body);
  return data;
}
