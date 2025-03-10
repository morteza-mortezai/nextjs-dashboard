import { clientApi } from '../clientApi';
import { IPaginatedResponse } from '../type/PaginatedResponse';
import { GetUsersQuery } from './type/GetUsersQuery';
import { User } from './type/User';

export default function getUsers(query: GetUsersQuery) {
  return clientApi.get<IPaginatedResponse<User>>('/users', { params: query });
}
