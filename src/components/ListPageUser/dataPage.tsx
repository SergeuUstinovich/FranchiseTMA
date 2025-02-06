import { AchievementsSvg, FeaturedSvg, FriendSvg } from "../../assets/svg";

export const dataPage = [
  {
    id: "1",
    svg: <FriendSvg />,
    title: "Приглaсить друзей",
    path: "/profile-friends",
  },
  {
    id: "2",
    svg: <FeaturedSvg />,
    title: "Избранное",
    path: "/profile-featured",
  },
  {
    id: "3",
    svg: <AchievementsSvg />,
    title: "Достижения",
    path: "/profile-achievements",
  },
];
