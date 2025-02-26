export interface MainTypeProps {
  tg_first_name: string;
  tg_last_name: string;
  tg_username: string;
  lvl: number;
  exp: number;
  photo_url: string;
  silver_coin: number;
  gold_coin: number;
  can_get_bonus: boolean;
  count_of_visit_day: number;
  is_admin: boolean
}

export interface MainTypeBonusesProps {
    day: number;
    money: number;
}

export interface MainTypeScheme {
    user?: MainTypeProps;
    bonuses?: MainTypeBonusesProps[]
}
