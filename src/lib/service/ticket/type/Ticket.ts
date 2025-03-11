export type Ticket = {
  id: number;
  subject: string;
  content: string;
  status: number;
  createdAt: string;
  updatedAt: string;
  completedAt: null | string;
  deletedAt: null | string;
  user: number;
  images:string
};
