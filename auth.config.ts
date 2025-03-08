import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    async jwt({token, account}) {
      if (account) {
        token = Object.assign({}, token, { access_token: account.access_token });
      }
    return token
    },
    async session({session, token}) {
      if(session) {
        session = Object.assign({}, session, {access_token: token.access_token})
        console.log(session);
        }
    return session
    }

  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;