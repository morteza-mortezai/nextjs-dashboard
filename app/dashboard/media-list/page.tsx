'use client'
import { getSession ,useSession, signIn, signOut } from "next-auth/react";

export default function mediaList(){
    const { data: token, status } = useSession()
console.log(token)
    return (<div>list</div>)
}