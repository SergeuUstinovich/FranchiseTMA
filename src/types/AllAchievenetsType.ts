export interface AllAchievenetsType {
    id: number;
    name: string;
    image: ImageAchiv;
    lvl: number
}

interface ImageAchiv {
    picture_url: string;
}

export interface AllAchievenetsScheme {
    achieves?: AllAchievenetsType[]
}