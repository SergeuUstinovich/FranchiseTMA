import { Link, useLocation } from "react-router-dom";
import style from "./Footer.module.scss";
import { dataNav } from "./dataNav";

export function Footer() {
  const location = useLocation();
  return (
    <div className={style.box}>
      <ul className={style.list}>
        {dataNav.map((item) => (
          <li className={style.item} key={item.id}>
            <Link className={style.link} to={item.path}>
              <div
                className={`${style.svgBox} ${
                  (item.path === '/' ? location.pathname === item.path : location.pathname.startsWith(item.path)) ? style.active : ''
                }`}
              >
                {item.svg}
              </div>
              <h3
                className={`${style.title} ${
                  (item.path === '/' ? location.pathname === item.path : location.pathname.startsWith(item.path)) ? style.active : ''
                }`}
              >
                {item.title}
              </h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
