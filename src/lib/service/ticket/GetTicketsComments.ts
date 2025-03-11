import { api } from 'src/boot/axios';
import { GetTicketsQuery } from 'src/types/ticket/GetTicketsQuery';
import { Ticket } from 'src/types/ticket/Ticket';
import { TicketComment } from 'src/types/ticket/TicketComment';

export default function getTicketComments(ticketId:number,query: GetTicketsQuery) {
  return api.get<{ticket:Ticket,comments:TicketComment[]}>(`ticket/${ticketId}/comments`, { params: query });
}
