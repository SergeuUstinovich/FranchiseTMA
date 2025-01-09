import { Link } from "react-router-dom";
import { dataPage } from "./dataPage";
import style from "./ListPageUser.module.scss";
import { ArrowSvg } from "../../assets/svg";

export function ListPageUser() {
  return (
    <div className={style.box}>
      <ul className={style.list}>
        {dataPage.map((item) => (
          <li className={style.item} key={item.id}>
            <Link className={style.link} to={item.path}>
              <div className={style.namePath}>
                <div className={style.boxSvg}>
                 {item.svg}
                </div> 
                <p className={style.descr}>{item.title}</p>
              </div>
              <ArrowSvg />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
