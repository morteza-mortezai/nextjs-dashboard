import { BaseMedia } from './base';

export type CreateMedia = BaseMedia & {
  avatarPath?: string;
  location?: number;
  type?: number;
  category?: number;
  content:string
};
