export type TicketComment = {
  id: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null | Date;
  author:'admin'|'user'
};
