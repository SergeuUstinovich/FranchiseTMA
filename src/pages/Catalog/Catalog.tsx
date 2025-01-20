import { ListCatalog } from "../../components";
import style from "./Catalog.module.scss";
import img from "../../assets/png/Banner.png";

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
    isFavorites: false,
    activeLvl: 5,
    imgArr: ["img1", "img2", "img"],
  },
];

function Catalog() {
  return (
    <div className={style.box}>
      <ListCatalog list={arr} />
    </div>
  );
}

export default Catalog;
