"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import { loginService } from "./service/auth/login";
import { removeSession, saveSession } from "./authSession";

export type State = {
  errors?: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};


const phoneRegExp = /^(0|98|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/;

const loginSchema = z.object({
  phone: z.string().regex(phoneRegExp, "شماره همراه معتبر نیست").trim(),
  password: z.string().min(6, "کلمه عبور باید حداقل 6 کاراکتر باشد").trim(),
});

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  const parsedCredentials = loginSchema.safeParse({
    phone: formData.get("phone"),
    password: formData.get("password"),
  });

  if (parsedCredentials.success) {
    const { phone, password } = parsedCredentials.data;
    try {
      const res = await loginService({ phone, password });

      await saveSession(res.access_token);



    } catch (error) {
      // throw error;
      console.log('err',error)
      return { message: "asd" };
    }
    redirect('/dashboard')
    // return null
  } else {
    return {
      errors: parsedCredentials.error.flatten().fieldErrors,
      message: "asdasdasd",
    };
  }
}

export async function signOut(){
  await removeSession()
  redirect('/login')
}