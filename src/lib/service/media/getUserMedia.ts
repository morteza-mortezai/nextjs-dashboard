import { api } from "@/src/lib/service/api";
import { Media } from "./type/Media";
import { IPaginatedResponse } from "@/src/lib/service/type/PaginatedResponse";
import { IPaginationParams } from "../type/paginationParams";

export const getUserMedia = async (params?: IPaginationParams) => {
  const  data  = await api.get<IPaginatedResponse<Media>>("/media/mine", 
    params,
  );
  return data;
};
