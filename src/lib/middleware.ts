import { isUserLoggedIn } from "./authSession";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function  middleware(request: NextRequest) {
    const isLoggedIn=await isUserLoggedIn()
  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/login",request.url));
  }
  return NextResponse.next();
}
