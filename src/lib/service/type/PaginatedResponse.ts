import { Pagination } from './pagination';

export interface IPaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}
