import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useTelegram } from "../../providers/telegram/telegram";
import style from "./Layout.module.scss";
import { Footer } from "../Footer";
import { Header } from "../Header";

function Layout() {
  const { tg } = useTelegram();
  const location = useLocation();
  const navigate = useNavigate();

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
  return (
    <div
      className={`${style.app} ${style.container} ${
        !location.pathname.startsWith("/profile") ? style.activeProfile : ""
      }`}
    >
      <header className={style.header}>
        {!location.pathname.startsWith("/profile") && <Header />}
      </header>
      <main className={`${style.main} ${!location.pathname.startsWith("/profile-edit") ? style.activeEdit : ''}`}>
        <Outlet />
      </main>
      <footer className={style.footer}>
        {!location.pathname.startsWith("/profile-edit") && <Footer />}
      </footer>
    </div>
  );
}

export default Layout;
