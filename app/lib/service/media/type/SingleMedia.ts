import { BaseMedia, Base } from './base';

export type SingleMedia = BaseMedia & {
  id: number;
  createdAt: string;
  location: null | Base;
  type: Base;
  category: Base;
  plan: null | number;
  avatarPath: string | null;
  user: null | { email: string };
};
