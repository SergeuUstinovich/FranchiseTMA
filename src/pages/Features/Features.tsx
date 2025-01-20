import { ListCatalog } from "../../components";
import img from "../../assets/png/Banner.png";
import style from "./Features.module.scss";
import notArr from "../../assets/png/notArr.png";

const arr = [
  {
    id: "154",
    img: img,
    title: "Epic Pizza",
    descr: "Сеть пиццерий со взрывным продуктом, покорившая уже 15 городов!",
    isActive: false,
    investments: 2.4,
    royalties: 6,
    turnover: 2.4,
    isFavorites: true,
    activeLvl: 5,
    imgArr: ["img1", "img2", "img"],
  },
];

function Features() {
  return (
    <div>
      <h1 className={style.title}>Избранное</h1>
      {arr.length > 0 ? (
        <ListCatalog list={arr} />
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
