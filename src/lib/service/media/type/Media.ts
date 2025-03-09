import { BaseMedia, Base } from './base';
export type Media = BaseMedia & {
  id: number;
  createdAt: string;
  location: null | Base;
  type: Base &{address:string};
  category: Base;
  avatarPath: string | null;
  score: null | number;
  special: boolean;
};
