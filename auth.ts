import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import { ILoginResponse } from "./app/login/loginResponse";
import { loginService } from "./app/login/login.service";

async function getUser(p: any): Promise<ILoginResponse | undefined> {
  try {
    const data = await loginService(p);

    return data;
  } catch (error) {
    console.error("Failed to fetch user:*****", error);
    throw new Error("Failed to fetch user.***");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ phone: z.string(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { phone, password } = parsedCredentials.data;
          const user = await getUser({ phone, password });
          if (user) return user;
        }

        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});
