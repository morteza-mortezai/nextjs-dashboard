import { api } from 'src/boot/axios';

export default function updateStatus({
  ticketId,
  status,
}: {
  ticketId: number;
  status: number;
}) {
  console.log(ticketId,status)
  return api.post(`ticket/${ticketId}/update-status`, { status });
}
