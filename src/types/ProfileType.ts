export interface ProfileTypeProps {
  id: number;
  tg_id: number;
  tg_username: string;
  tg_first_name: string;
  tg_last_name: string;
  photo_url: string;
  lvl: number;
  silver_coin: number;
  gold_coin: number;
  first_visit: string;
  last_visit: string;
  count_of_visit_day: number;
  can_get_bonus: boolean;
  city: string;
  mobile_phone: string;
  url_invite_link: string;
  url_created_qr_code: string;
  income_from_referrals: number;
  referrer: number;
}

export interface ProfileTypeStataProps {
  completed_lessons: number;
  count_of_selling_franchise: number;
  count_of_registration: number;
  count_of_group_offers: number;
}

export interface ProfileScheme {
    user?: ProfileTypeProps;
    stata?: ProfileTypeStataProps;
}
