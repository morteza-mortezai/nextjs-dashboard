'use server'
import { getUserMedia } from "@/src/lib/service/media/getUserMedia";
import { deleteMedia } from "@/src/lib/service/media/deleteMedia";
import { IPaginationParams } from "@/src/lib/service/type/paginationParams";

export async function getUserMediaAction(params?:IPaginationParams){

    try {
        const list=await getUserMedia(params)
        return list
    } catch (error) {

        throw new Error('Failed to fetch media.'); 
    }
}

export async function deleteUserMediaAction( id: number){

    try {
       await deleteMedia(+id)
       return { message: 'Media deleted successfully' };
    } catch (error) {
        console.log('err',error)
        throw new Error('Failed to delete media'); 
    }
}