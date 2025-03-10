import { api } from "@/src/lib/service/api";
import { IPaginatedResponse } from "@/src/lib/service/type/PaginatedResponse";
import { IPaginationParams } from "../type/paginationParams";
import { UserMedia } from "./type/UserMedia";

export const getUserMedia = async (params?: IPaginationParams) => {
  const  data  = await api.get<IPaginatedResponse<UserMedia>>("/media/mine", 
    params,
  );
  return data;
};
