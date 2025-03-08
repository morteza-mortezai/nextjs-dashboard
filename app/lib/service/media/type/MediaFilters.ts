export type MediaFilters = {
  category?: number;
  follower_from?: number;
  follower_to?: number;
  type?: number;
  item_per_page?: number;
  page?: number;
  sortBy?: string | null;
  sortType?: string| null;
  search?: string| null;
  location?: number| null;
  acceptAds: boolean;
  readyToExchange: boolean;
  isCareerPage: boolean;
};
