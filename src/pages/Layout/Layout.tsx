import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTelegram } from "../../providers/telegram/telegram";
import style from "./Layout.module.scss";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { useQueryAll } from "../../utils/useQueryAll";
import { useDispatch } from "react-redux";
import { mainActions } from "../../providers/StoreProvider/slice/mainSlice";
import { MainStatsType } from "../../types/MainStatsType";
import { allFranchiseActions } from "../../providers/StoreProvider/slice/allFranchiseSlice";
import { allFavoritesActions } from "../../providers/StoreProvider/slice/allFavorites";
import { allFriendsActions } from "../../providers/StoreProvider/slice/allFriendsSlice";
import { Toaster } from "react-hot-toast";
import { allAchivmetsActions } from "../../providers/StoreProvider/slice/allAchivmetsSlice";
import { allVideoActions } from "../../providers/StoreProvider/slice/allVideoSlice";
import { allTasksActions } from "../../providers/StoreProvider/slice/allTasksSlice";
import SkeletonHeader from "../Header/SkeletonHeader";

function Layout() {
  const { tg } = useTelegram();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    mainPageQuery,
    mainStatsQuery,
    allFranchiseQuery,
    allFavoriteQuery,
    allFriendQuery,
    allAchievementQuery,
    allVideoQuery,
    allTaskQuery,
  } = useQueryAll();
  const dispatch = useDispatch();
  const [mainStats, setMainStats] = useState<MainStatsType | undefined>();

  tg.expand();
  tg.disableVerticalSwipes();
  tg.setHeaderColor("#000", "#fff");

  useEffect(() => {
    if (location.pathname === "/") {
      tg.BackButton.hide();
    } else {
      tg.BackButton.show();
      tg.BackButton.onClick(() => {
        navigate(-1);
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    if (mainPageQuery.data) {
      dispatch(mainActions.initStartUser(mainPageQuery.data.user));
      dispatch(mainActions.initStartBonus(mainPageQuery.data.bonuses));
    }
  }, [mainPageQuery.data]);

  useEffect(() => {
    if (mainStatsQuery.data) {
      setMainStats(mainStatsQuery.data);
    }
  }, [mainStatsQuery.data]);

  useEffect(() => {
    if (allFranchiseQuery.data) {
      dispatch(
        allFranchiseActions.addAllFranchise(allFranchiseQuery.data.data)
      );
    }
  }, [allFranchiseQuery.data]);

  useEffect(() => {
    if (allFavoriteQuery.data) {
      dispatch(allFavoritesActions.addAllFavorites(allFavoriteQuery.data));
    }
  }, [allFavoriteQuery.data]);

  useEffect(() => {
    if (allFriendQuery.data) {
      dispatch(allFriendsActions.addAllFriends(allFriendQuery.data));
    }
  }, [allFriendQuery.data]);

  useEffect(() => {
    if (allAchievementQuery.data) {
      dispatch(allAchivmetsActions.addAllAchivmets(allAchievementQuery.data));
    }
  }, [allAchievementQuery.data]);

  useEffect(() => {
    if (allVideoQuery.data) {
      dispatch(allVideoActions.addAllVideo(allVideoQuery.data));
    }
  }, [allVideoQuery.data]);

  useEffect(() => {
    if (allTaskQuery.data) {
      dispatch(allTasksActions.addAllTasks(allTaskQuery.data));
    }
  }, [allTaskQuery.data]);

  return (
    <div
      style={
        location.pathname.startsWith("/game")
          ? {
              paddingRight: "0px",
              paddingLeft: "0px",
            }
          : {}
      }
      className={`${style.app} ${style.container} ${
        !location.pathname.startsWith("/profile") ? style.activeProfile : ""
      }`}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <header className={style.header}>
        {mainStats ? (
          <>
            {!location.pathname.startsWith("/profile") && (
              <Header stats={mainStats} />
            )}
          </>
        ) : (
          <>{!location.pathname.startsWith("/profile") && <SkeletonHeader />}</>
        )}
      </header>
      <main
        style={
          location.pathname.startsWith("/game")
            ? {
                paddingBottom: "90px",
              }
            : {}
        }
        className={`${style.main} ${
          !location.pathname.startsWith("/profile-edit") ? style.activeEdit : ""
        }`}
      >
        <Outlet />
      </main>
      <footer className={style.footer}>
        {!location.pathname.startsWith("/profile-edit") && <Footer />}
      </footer>
    </div>
  );
}

export default Layout;
