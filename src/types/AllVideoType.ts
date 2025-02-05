export interface AllVideoType {
  progress_bar: number;
  title: string;
  curse_video_id: number;
  can_take: boolean;
  take_away: boolean;
  videos: VideosType[];
  url_link_preza: string;
}

export interface VideosType {
  video_id: number;
  is_activate: boolean;
  link: string;
  name: string;
  number_of_video: number;
  watched: boolean;
  description: string;
  can_take_bonus: boolean;
  take_bonus: boolean;
  exp: number;
  gold_coin: number;
  silver_coin: number;
}

export interface AllVideoScheme {
    arrVideo?: AllVideoType[]
}
