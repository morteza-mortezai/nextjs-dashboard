import { cookies } from "next/headers";
import { ILoginResponse } from "./service/auth/types/loginResponse";
const cookieName = "userSession";

export async function saveSession(accessToken: string) {
  return (await cookies()).set(cookieName, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
  });
}
export async function removeSession() {
  return (await cookies()).delete(cookieName);
}
export async function isUserLoggedIn() {
  return !!(await cookies()).get(cookieName)?.value;
}
export async function getSession() {
  return (await cookies()).get(cookieName)?.value;
}
