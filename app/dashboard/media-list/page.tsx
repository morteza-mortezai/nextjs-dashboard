'use client'

import { useSession } from "@/app/lib/sessionProvider"

export default function mediaList(){
    const s=useSession()
    return (<div>list
        <div>{s}</div>
    </div>)
}