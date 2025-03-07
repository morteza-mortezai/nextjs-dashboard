import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import postgres from 'postgres';
import { api } from './app/lib/api';
 

 
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
 
async function getUser(p:any): Promise<User | undefined> {
  try {
    const data=await api.post<any>('/auth/sign-in',p)

   
    console.log('data***',data)
    return data
  } catch (error) {
    console.error('Failed to fetch user:*****', error);
    throw new Error('Failed to fetch user.***');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
       const parsedCredentials = z
          .object({ phone: z.string() , password: z.string().min(6) })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { phone, password } = parsedCredentials.data;
          const user = await getUser({phone, password});
          if(user)
          return user
          
        }
 
        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
});