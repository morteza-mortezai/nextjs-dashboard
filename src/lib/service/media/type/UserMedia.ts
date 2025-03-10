import { Media } from './Media';

export type UserMedia = Media & {
  user:{fullName:string}
};
