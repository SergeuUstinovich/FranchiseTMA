export interface AllFriendsType {
  id: number;
  first_name: string;
  username: string;
  last_name: string;
  photo_url: string;
  first_visit: string;
  income_from_referrals_silver: number;
  income_from_referrals_gold: number;
}

export interface AllFriendsScheme {
    arrFriends?: AllFriendsType[]
}
