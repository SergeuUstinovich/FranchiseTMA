import { Link } from "react-router-dom";
import { ProgressBar } from "..";
import { EditingProfileSvg, ProfileNavSvg } from "../../assets/svg";
import { displayName } from "../../helpers/truncateText";
import style from "./InfoUser.module.scss";
import { useSelector } from "react-redux";
import { getProfileUser } from "../../providers/StoreProvider/selectors/getProfile";

export function InfoUser() {
  const profile = useSelector(getProfileUser)

  return (
    <div className={style.box}>
      <div className={style.svgBox}>
        {profile?.photo_url ? (
          <img className={style.imgProfile} src={profile?.photo_url} alt="" />
        ) : (
          <ProfileNavSvg className={style.svgProfile} />
        )}
      </div>
      {profile && (
        <h2 className={style.title}>
        {displayName(30, profile.tg_first_name, profile.tg_last_name, profile.tg_username)}
      </h2>
      )}
      <div className={style.boxBar}>
        <ProgressBar
          progress={0}
          children={<p className={style.lvl}>{profile?.lvl} Уровень</p>}
        />
      </div>
      {(profile?.city || profile?.mobile_phone) && (
        <div className={style.infoData}>
          {profile.city && (
            <p className={style.descr}>
              Город: <span className={style.span}>{profile.city}</span>
            </p>
          )}
          {profile.mobile_phone && (
            <p className={style.descr}>
              Телефон: <span className={style.span}>{profile.mobile_phone}</span>
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
