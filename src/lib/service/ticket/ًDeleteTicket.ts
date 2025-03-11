import { clientApi } from "../clientApi";

export default function deleteTicket(ticketId:number) {
  return clientApi.delete(`ticket/${ticketId}`);
}
