import { Link } from "react-router-dom";
import style from "./ListCatalog.module.scss";
import { FavoritesSvg, LockLvlSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";

interface ItemCatalogProps {
  id: string;
  img: string;
  title: string;
  descr: string;
  isActive: boolean;
  investments: number;
  royalties: number;
  turnover: number;
  isFavorites: boolean;
  activeLvl: number;
}

interface ListCatalogProps {
  list: ItemCatalogProps[];
}

export function ListCatalog({ list }: ListCatalogProps) {
  return (
    <ul className={style.list}>
      {list.map((item) => (
        <li className={style.item} key={item.id}>
          <div className={style.boxImg}>
            <img className={style.img} src={item.img} alt={item.title} />
            {item.isActive && (
              <div className={style.blockLvl}>
                <div className={style.boxLvlOpen}>
                  <LockLvlSvg className={style.svgLock} />
                  <p className={style.lvlOpenDescr}>
                    Доступно на {item.activeLvl} уровне
                  </p>
                </div>
              </div>
            )}
          </div>
          <h2 className={style.title}>{item.title}</h2>
          <p className={style.descr}>{item.descr}</p>
          <div className={style.boxNumber}>
            <p className={style.numberDescr}>
              Инвестиции:{" "}
              <span className={style.span}>от {item.investments} млн р.</span>
            </p>
            <p className={style.numberDescr}>
              Роялти: <span className={style.span}>{item.royalties}%</span>
            </p>
          </div>
          <div className={style.boxNumberStart}>
            <p className={style.numberDescr}>
              Старт с оборотом:{" "}
              <span className={style.span}>от {item.turnover} млн р.</span>
            </p>
          </div>

          <Link className={style.link} to={`/catalog/${item.id}`}>
            Подробнее
          </Link>
          <Button className={style.favorites}>
            <FavoritesSvg
              className={item.isFavorites ? style.isfavorites : ""}
            />
          </Button>
        </li>
      ))}
    </ul>
  );
}
