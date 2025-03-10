import { clientApi } from '../clientApi';
import { IPaginatedResponse } from '../type/PaginatedResponse';
import { GetUsersQuery } from './type/GetUsersQuery';
import { User } from './type/User';

export default async function getUsers(query: GetUsersQuery) {
  const { data } = await clientApi.get<IPaginatedResponse<User>>('users/by-ref', {
    params: query,
  });
  return data
}
