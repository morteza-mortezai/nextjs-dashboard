export type Ticket = {
  id: number;
  subject: string;
  content: string;
  status: number;
  createdAt: Date;
  updatedAt: Date;
  completedAt: null | Date;
  deletedAt: null | Date;
  user: number;
  images:string
};
