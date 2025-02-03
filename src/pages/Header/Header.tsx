import { ProfileNavSvg } from "../../assets/svg";
import style from "./Header.module.scss";
import imgsilverCoin from "../../assets/png/silverCoin.png";
import imggoldCoin from "../../assets/png/goldCoin.png";
import { displayName } from "../../helpers/truncateText";
import { MainStatsType } from "../../types/MainStatsType";

interface HeaderProps {
  stats: MainStatsType;
}

export function Header({ stats }: HeaderProps) {
  const {
    photo_url,
    tg_first_name,
    tg_last_name,
    tg_username,
    lvl,
    gold_coin,
    silver_coin,
  } = stats;
  
  return (
    <div className={style.box}>
      <div className={style.boxInfo}>
        <div className={style.svgImgBox}>
          {photo_url ? <img className={style.imgSvg} src={photo_url} alt="" /> : <ProfileNavSvg />}
        </div>
        <div className={style.boxName}>
          <h2 className={style.name}>
            {displayName(20, tg_first_name, tg_last_name, tg_username)}
          </h2>
          <p className={style.lvl}>{lvl} уровень</p>
        </div>
      </div>
      <div className={style.boxCoin}>
        <div className={style.coinBox}>
          <img className={style.imgCoin} src={imgsilverCoin} alt="$" />
          <p className={style.numberCoin}>{silver_coin}</p>
        </div>
        <div className={style.coinBox}>
          <img className={style.imgCoin} src={imggoldCoin} alt="$" />
          <p className={style.numberCoin}>{gold_coin}</p>
        </div>
      </div>
    </div>
  );
}
