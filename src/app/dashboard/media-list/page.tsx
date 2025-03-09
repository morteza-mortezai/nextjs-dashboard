'use client'

import { useSession } from "@/src/lib/sessionProvider"

export default function mediaList(){
    const s=useSession()
    return (<div>list
        <div>{s}</div>
    </div>)
}