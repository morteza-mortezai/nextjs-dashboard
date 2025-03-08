import { api } from "@/app/lib/service/api";
import { Media } from "./type/Media";
import { IPaginatedResponse } from "@/app/lib/service/type/PaginatedResponse";

export const getUserMedia = async (params: {
  page: number;
  item_per_page: number;
}) => {
  const { data } = await api.get<IPaginatedResponse<Media>>("/media/mine", {
    params,
  });
  return data;
};
