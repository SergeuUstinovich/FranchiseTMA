import { ProfileNavSvg } from "../../assets/svg";
import { displayName } from "../../helpers/truncateText";
import { FriendUser } from "./FriendList";
import style from "./FriendList.module.scss";
import imgCoin from "../../assets/png/silverCoin.png";

function FriendItem(props: FriendUser) {
  const { firstName, lastName, img, coin, userName, dateInvite } = props;
  return (
    <div className={style.boxItem}>
      <div className={style.infoFriend}>
        <div className={style.svgBox}>
          {img ? (
            <img src={img} alt="" />
          ) : (
            <ProfileNavSvg />
          )}
        </div>
        <div className={style.boxName}>
          <h3 className={style.titleName}>{displayName(30, firstName, lastName, userName)}</h3>
          <p className={style.descrDateInvite}>Приглашён {dateInvite}</p>
        </div>
      </div>
      <div className={style.coinFriend}>
        <img className={style.imgCoinFriend} src={imgCoin} alt="" />
        <p className={style.descrCoinFriend}>+{coin}</p>
      </div>
    </div>
  );
}

export default FriendItem;
