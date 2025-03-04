import { ProfileNavSvg } from "../../assets/svg";
import { displayName } from "../../helpers/truncateText";
import style from "./FriendList.module.scss";
import imgCoinSilver from "../../assets/png/silverCoin.png";
import imgCoinGold from "../../assets/png/goldCoin.png"
import { AllFriendsType } from "../../types/AllFriends";
import { formatDate } from "../../helpers/formatDate";
import useMutateAll from "../../utils/useMutateAll";
import { Button } from "../../ui/Button";
import { queryClient } from "../../api/queryClient";

function FriendItem(props: AllFriendsType) {
  const {
    first_name,
    last_name,
    photo_url,
    income_from_referrals_silver,
    income_from_referrals_gold,
    username,
    first_visit,
    id,
  } = props;

  const { takeMoneyRefMutate } = useMutateAll();
  const isFetching = queryClient.isFetching({queryKey: ["friend"]})

  const handleTakeMoney = () => {
    takeMoneyRefMutate.mutate({ id });
  };

  return (
    <Button
      isDisabled={takeMoneyRefMutate.isPending || isFetching > 0}
      onClick={income_from_referrals_silver || income_from_referrals_gold > 0 ? handleTakeMoney : () => {}}
      className={style.boxItem}
    >
      <div className={style.infoFriend}>
        <div className={style.svgBox}>
          {photo_url ? (
            <img className={style.imgPhoto} src={photo_url} alt="" />
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
      <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
        <div className={style.coinFriend}>
          <img className={style.imgCoinFriend} src={imgCoinSilver} alt="" />
          <p className={style.descrCoinFriend}>
            +{income_from_referrals_silver}
          </p>
        </div>
        <div className={style.coinFriend}>
          <img className={style.imgCoinFriend} src={imgCoinGold} alt="" />
          <p className={style.descrCoinFriend}>
            +{income_from_referrals_gold}
          </p>
        </div>
      </div>
    </Button>
  );
}

export default FriendItem;
