import { clientApi } from "../clientApi";
import { IPaginatedResponse } from "../type/PaginatedResponse";
import { GetTicketsQuery } from "./type/GetTicketsQuery";
import { Ticket } from "./type/Ticket";

export default function getTickets(query: GetTicketsQuery) {
  return clientApi.get<IPaginatedResponse<Ticket>>('ticket', { params: query });
}
