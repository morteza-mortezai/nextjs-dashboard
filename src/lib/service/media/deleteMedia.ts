import { api } from '@/src/lib/service/api';
import { Media } from './type/Media';

  export const deleteMedia = async (id: number) => {
    const  data  = await api.delete<Media[]>(`/media/${id}`);
    return data;
  };



