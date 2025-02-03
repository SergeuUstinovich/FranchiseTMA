import { ListCatalog } from "../../components";
import style from "./Features.module.scss";
import notArr from "../../assets/png/notArr.png";
import { useSelector } from "react-redux";
import { getAllFavoritesSelector } from "../../providers/StoreProvider/selectors/getAllFavoritex";

function Features() {
  const arrFavorite = useSelector(getAllFavoritesSelector);

  return (
    <div>
      <h1 className={style.title}>Избранное</h1>
      {arrFavorite && arrFavorite.length > 0 ? (
        <ListCatalog list={arrFavorite} />
      ) : (
        <div className={style.notArrBox}>
          <img className={style.img} src={notArr} alt="" />
          <p className={style.descr}>Нет избранного</p>
        </div>
      )}
    </div>
  );
}

export default Features;
