import {
  CatalogNavSvg,
  GameNavSvg,
  EducationNavSvg,
  TasksNavSvg,
  ProfileNavSvg,
} from "../../assets/svg";

export const dataNav = [
  {
    id: "1",
    svg: <GameNavSvg />,
    title: "Игра",
    path: "/game",
  },
  {
    id: "2",
    svg: <CatalogNavSvg />,
    title: "Каталог",
    path: "/",
  },
  {
    id: "3",
    svg: <EducationNavSvg />,
    title: "Обучение",
    path: "/education",
  },
  {
    id: "4",
    svg: <TasksNavSvg />,
    title: "Задание",
    path: "/tasks",
  },
  {
    id: "5",
    svg: <ProfileNavSvg />,
    title: "Профиль",
    path: "/profile",
  },
];
