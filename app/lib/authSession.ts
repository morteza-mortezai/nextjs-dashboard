import { cookies } from "next/headers";
const cookieName = "userSession";
import { redirect } from "next/navigation";

export async function saveSession(accessToken: string) {
return (await cookies()).set(cookieName, accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV == "production",
  });
}
export async function removeSession( ) {
   return (await cookies()).delete(cookieName)
}