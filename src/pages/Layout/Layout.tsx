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

function Layout() {
  const { tg } = useTelegram();
  const location = useLocation();
  // const navigate = useNavigate();
  const { mainPageQuery, mainStatsQuery, allFranchiseQuery, allFavoriteQuery } = useQueryAll();
  const dispatch = useDispatch();
  const [mainStats, setMainStats] = useState<MainStatsType | undefined>();

  // tg.expand();
  // tg.disableVerticalSwipes();
  // tg.setHeaderColor("#000", "#fff");

  // useEffect(() => {
  //   if (location.pathname === "/") {
  //     tg.BackButton.hide();
  //   } else {
  //     tg.BackButton.show();
  //     tg.BackButton.onClick(() => {
  //       navigate(-1);
  //     });
  //   }
  // }, [location.pathname]);

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
      dispatch(allFranchiseActions.addAllFranchise(allFranchiseQuery.data.data))
    }
  }, [allFranchiseQuery.data]);

  useEffect(() => {
    if (allFavoriteQuery.data) {
      dispatch(allFavoritesActions.addAllFavorites(allFavoriteQuery.data));
    }
  }, [allFavoriteQuery.data]);

  return (
    <div
      className={`${style.app} ${style.container} ${
        !location.pathname.startsWith("/profile") ? style.activeProfile : ""
      }`}
    >
      <header className={style.header}>
        {mainStats && (
          <>
            {!location.pathname.startsWith("/profile") && (
              <Header stats={mainStats} />
            )}
          </>
        )}
      </header>
      <main
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
