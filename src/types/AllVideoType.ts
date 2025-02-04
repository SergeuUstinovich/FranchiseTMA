export interface AllVideoType {
  progress_bar: number;
  title: string;
  videos: VideosType[];
}

interface VideosType {
  id: number;
  is_activate: boolean;
  link: string;
  name: string;
  number_of_video: number;
  watched: boolean;
  description: string;
}

export interface AllVideoScheme {
    arrVideo?: AllVideoType[]
}
