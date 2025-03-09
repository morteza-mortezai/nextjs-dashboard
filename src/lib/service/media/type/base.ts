export type BaseMedia = {
  title: string;
  addr: string;
  pricePerPost?: number;
  pricePerStory?: number;
  pricePerView?: number;
  follower: number;
  contact: string;
  desc?: string;
  acceptAds: boolean;
  readyToExchange: boolean;
  exchangeDesc:string
  adsDesc:string
  engagementRate:number|null
};
export type Base = {
  id: number;
  name: string;
  title:string
};





