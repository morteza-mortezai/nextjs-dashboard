'use client'
import { User } from "@/src/lib/service/user/type/User"
import { useEffect,useState } from "react"
import getUsers from "@/src/lib/service/user/GetUsers"

export default function UsersList(){
    const [users,setUsers]=useState<User[]>([])
    
    useEffect(()=>{
         getUsers({}).then(res=>{
            setUsers(v=>([...v,...res.data]))
        })
    },[])
    return (
        <div>
            <h1>list</h1>
            <ul>
                {users.map(u=>(<li>{u.fullName}</li>))}
            </ul>
        </div>
    )
}