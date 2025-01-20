import { useState } from "react";
import img from "../../assets/png/Banner.png";
import { FavoritesSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import style from "./InfoPageCatalog.module.scss";
import { classNames } from "../../utils/classNames";
import Descr from "./Descr";
import BlockLink from "./BlockLink";
import presentation from '../../assets/svg/Presentation.svg'
import statisticks from '../../assets/svg/statisticks.svg'
import document from '../../assets/svg/Document.svg'
import support from '../../assets/svg/Support.svg'

const obj = {
  id: "154",
  img: img,
  title: "Epic Pizza",
  descr:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam ea iste illo quidem tenetur beatae soluta molestias non velit unde iure natus, earum ipsa obcaecati ipsam officiis explicabo autem voluptas praesentium eum nostrum maxime commodi? Porro eveniet mollitia necessitatibus nam magnam voluptatibus et voluptates repudiandae laborum nemo repellat iure, rerum facilis? Minus, illo tenetur explicabo aspernatur labore quae cum similique dolore doloremque voluptas suscipit, magnam aliquam placeat illum alias atque distinctio laborum voluptates ipsam molestias repellendus non inventore. Omnis, voluptatibus maiores perspiciatis ducimus distinctio quis numquam exercitationem suscipit illo vero veritatis, hic ullam debitis ad at recusandae, nemo voluptates iusto.",
  isActive: false,
  investments: 2.4,
  royalties: 6,
  turnover: 2.4,
  isFavorites: false,
  activeLvl: 5,
  imgArr: ["img1", "img2", "img"],
  tegArr: ['Поддержка 24/7', 'Обучение сотрудников', 'Рекламные материалы']
};

function InfoPageCatalog() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };
  const truncatedDescr =
    obj.descr.length > 100 ? obj.descr.substring(0, 120) + "..." : obj.descr;

  const mods = {
    [style.expand]: isExpanded,
  };

  return (
    <div className={style.box}>
      <div className={style.blockImg}>
        <img className={style.img} src={obj.img} alt={obj.title} />
        <Button className={style.favorites}>
          <FavoritesSvg className={obj.isFavorites ? style.isfavorites : ""} />
        </Button>
      </div>
      <div className={style.contentBox}>
        <h2 style={{fontSize: '24px'}} className={style.title}>{obj.title}</h2>
        <p className={classNames(style.descr, mods, [])}>
          {isExpanded ? obj.descr : truncatedDescr}
        </p>
        {obj.descr.length > 100 && (
          <Button onClick={toggleExpansion} className={style.moreDescr}>
            {" "}
            {isExpanded ? "Скрыть" : "Читать полностью"}{" "}
          </Button>
        )}
      </div>
      <div className={style.contentBox}>
        <h2 className={style.title}>Условия франшизы</h2>
        <Descr descr="Инвестиции" span="от 5 000 000" />
        <Descr descr="Паушальный взнос" span="от 5 000 000" />
        <Descr descr="Роялти" span="4%" />
      </div>
      <div className={style.contentBox}>
        <h2 className={style.title}>Доходы</h2>
        <Descr descr="Чистая прибыль" span="300 000 р." />
        <Descr descr="Окупаемость" span="12 месяцев" />
        <Descr descr="Расходы в месяц" span="от 50 000 р." />
      </div>
      <div className={style.contentBox}>
        <h2 className={style.title}>Пакет услуг</h2>
        <ul className={style.listTeg}>
            {obj.tegArr.map((item, index) => (
                <li key={index} className={style.itemTeg}>{item}</li>
            ))}
        </ul>
      </div>
      <div className={style.contentBox}>
        <div className={style.photoBox}>
            <h2 style={{margin: '0'}} className={style.title}>Фото</h2>
            <p className={style.allPhoto}>Смотреть все</p>
        </div>
        будут фотки
      </div>
      <BlockLink mgBot={8} svg={presentation} title="Презентация продукта" link="" />
      <BlockLink mgBot={8} svg={statisticks} title="Финансовая модель" link="" />
      <BlockLink mgBot={8} svg={document} title="Договор" link="" />
      <div className={style.boxBtn}>
        <Button style={{maxWidth: '48px'}} className={style.btn}>
            <img src={support} alt="" />
        </Button>
        <Button className={style.btn}>
            Новая сделка
        </Button>
      </div>
    </div>
  );
}

export default InfoPageCatalog;
