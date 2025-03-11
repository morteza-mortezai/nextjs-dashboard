import { clientApi } from "../clientApi";

export default function createcomment(ticketId: number, content: string) {
  return clientApi.post(`ticket/${ticketId}/comment`, { content });
}
