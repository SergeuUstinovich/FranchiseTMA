import { ProfileNavSvg } from "../../assets/svg";
import { displayName } from "../../helpers/truncateText";
import style from "./FriendList.module.scss";
import imgCoin from "../../assets/png/silverCoin.png";
import { AllFriendsType } from "../../types/AllFriends";
import { formatDate } from "../../helpers/formatDate";
import useMutateAll from "../../utils/useMutateAll";
import { Button } from "../../ui/Button";

const api_url = import.meta.env.VITE_API_PHOTO_URL;

function FriendItem(props: AllFriendsType) {
  const {
    first_name,
    last_name,
    photo_url,
    income_from_referrals,
    username,
    first_visit,
    id,
  } = props;

  const { takeMoneyRefMutate } = useMutateAll();

  const handleTakeMoney = () => {
    takeMoneyRefMutate.mutate({ id });
  };

  return (
    <Button
      isDisabled={takeMoneyRefMutate.isPending}
      onClick={income_from_referrals == 0 ? handleTakeMoney : () => {}}
      className={style.boxItem}
    >
      <div className={style.infoFriend}>
        <div className={style.svgBox}>
          {photo_url ? (
            <img
              className={style.imgPhoto}
              src={`${api_url}${photo_url}`}
              alt=""
            />
          ) : (
            <ProfileNavSvg />
          )}
        </div>
        <div className={style.boxName}>
          <h3 className={style.titleName}>
            {displayName(30, first_name, last_name, username)}
          </h3>
          <p className={style.descrDateInvite}>
            Приглашён {formatDate(first_visit)}
          </p>
        </div>
      </div>
      <div className={style.coinFriend}>
        <img className={style.imgCoinFriend} src={imgCoin} alt="" />
        <p className={style.descrCoinFriend}>+{income_from_referrals}</p>
      </div>
    </Button>
  );
}

export default FriendItem;
