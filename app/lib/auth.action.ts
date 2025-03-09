"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { loginService } from "./service/auth/login";
import { removeSession, saveSession } from "./authSession";

export type State =|undefined| {
  errors?: {
    phone?: string[];
    password?: string[];
  };
  message?: string | null;
};


const phoneRegExp = /^(0|98|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const loginSchema = z.object({
  phone: z.string().regex(phoneRegExp, "شماره همراه معتبر نیست").trim(),
  password: z.string().min(6, "کلمه عبور باید حداقل 6 کاراکتر باشد").trim(),
  redirectTo: z.string().trim(),
});

export async function authenticate(
  prevState: State | undefined,
  formData: FormData
) {
  const parsedCredentials = loginSchema.safeParse({
    phone: formData.get("phone"),
    password: formData.get("password"),
    redirectTo: formData.get("redirectTo"),
  });

  if (!parsedCredentials.success) {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
    };
  } 
  const { phone, password,redirectTo } = parsedCredentials.data;
  try {
    const res = await loginService({ phone, password });

    await saveSession(res.access_token);



  } catch (error) {
    // throw error;
    console.log('err',error)
    return { message: "نام کاربری یا کلمه عبور اشتباه است", };
  }
  redirect(redirectTo)
  // return null

}

export async function signOut(){
  await removeSession()
  redirect('/login')
}