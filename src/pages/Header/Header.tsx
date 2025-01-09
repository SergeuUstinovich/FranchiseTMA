import { ProfileNavSvg } from "../../assets/svg";
import { useTelegram } from "../../providers/telegram/telegram";
import style from "./Header.module.scss";
import imgsilverCoin from "../../assets/png/silverCoin.png";
import imggoldCoin from "../../assets/png/goldCoin.png";
import { displayName } from "../../helpers/truncateText";

export function Header() {
  const { photo, firstName, lastName, userName } = useTelegram();

  return (
    <div className={style.box}>
      <div className={style.boxInfo}>
        <div className={style.svgImgBox}>
          {photo ? <img src={photo} alt="" /> : <ProfileNavSvg />}
        </div>
        <div className={style.boxName}>
          <h2 className={style.name}>
            {displayName(20, firstName, lastName, userName)}
          </h2>
          <p className={style.lvl}>1 уровень</p>
        </div>
      </div>
      <div className={style.boxCoin}>
        <div className={style.coinBox}>
          <img className={style.imgCoin} src={imgsilverCoin} alt="$" />
          <p className={style.numberCoin}>835</p>
        </div>
        <div className={style.coinBox}>
          <img className={style.imgCoin} src={imggoldCoin} alt="$" />
          <p className={style.numberCoin}>835</p>
        </div>
      </div>
    </div>
  );
}
