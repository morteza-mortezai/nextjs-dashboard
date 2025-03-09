'use server'
import { getUserMedia } from "@/src/lib/service/media/getUserMedia";
import { IPaginationParams } from "@/src/lib/service/type/paginationParams";

export async function getUserMediaAction(params?:IPaginationParams){
    console.log('params**',params)
    try {
        const list=await getUserMedia(params)
        return list
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch invoices.'); 
    }
}