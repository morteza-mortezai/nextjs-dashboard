import { api } from '@/src/lib/service/api';

  export const deleteMedia = async (id: number) => {
    const  data  = await api.delete(`media/${id}`);
    return data;
  };



