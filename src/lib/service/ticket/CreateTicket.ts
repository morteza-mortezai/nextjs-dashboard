import { clientApi } from "../clientApi";
import { CreateTicket } from './type/CreateTicket';

export default function createTicket(body: CreateTicket) {
  return clientApi.post('ticket', body);
}
