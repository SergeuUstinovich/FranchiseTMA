import { Link } from "react-router-dom";
import { ProgressBar } from "..";
import { EditingProfileSvg, ProfileNavSvg } from "../../assets/svg";
import { displayName } from "../../helpers/truncateText";
import { useTelegram } from "../../providers/telegram/telegram";
import style from "./InfoUser.module.scss";

const obj = {
  city: "Moсква",
  telefon: "+799 (12) 345 67 67",
};

export function InfoUser() {
  const { photo, firstName, lastName, userName } = useTelegram();
  return (
    <div className={style.box}>
      <div className={style.svgBox}>
        {photo ? (
          <img src={photo} alt="" />
        ) : (
          <ProfileNavSvg className={style.svgProfile} />
        )}
      </div>
      <h2 className={style.title}>
        {displayName(30, firstName, lastName, userName)}
      </h2>
      <div className={style.boxBar}>
        <ProgressBar
          progress={50}
          children={<p className={style.lvl}>1 Уровень</p>}
        />
      </div>
      {(obj.city || obj.telefon) && (
        <div className={style.infoData}>
          {obj.city && (
            <p className={style.descr}>
              Город: <span className={style.span}>{obj.city}</span>
            </p>
          )}
          {obj.telefon && (
            <p className={style.descr}>
              Телефон: <span className={style.span}>{obj.telefon}</span>
            </p>
          )}
        </div>
      )}
      <Link className={style.svgEditing} to={'/profile-edit'}>
       <EditingProfileSvg  />
      </Link>
    </div>
  );
}
