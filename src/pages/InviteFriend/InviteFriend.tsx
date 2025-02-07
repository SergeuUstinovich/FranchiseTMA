import { Link } from "react-router-dom";
import { CopyIconSvg, QrIconSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import style from "./InviteFriend.module.scss";
import { FriendList } from "../../components";
import { useSelector } from "react-redux";
import { getAllFriends } from "../../providers/StoreProvider/selectors/getAllFriends";
import { getProfileUser } from "../../providers/StoreProvider/selectors/getProfile";
import { useTelegram } from "../../providers/telegram/telegram";
import toast from 'react-hot-toast';
import { LoaderContent } from "../../ui/Loader/LoaderContent";

function InviteFriend() {
  const friends = useSelector(getAllFriends);
  const profile = useSelector(getProfileUser)
  const {tg} = useTelegram()

  const handleRefLink = () => {
    const link =
      //?url= тут присваиваем нашу реферальную ссылку
      `https://t.me/share/url?url=${profile?.url_invite_link}`;
    //можно после ссылки вставить &text={опциональный_текст}
    tg.openTelegramLink(link);
  };

  const copyToRefLink = async () => {
    try {
      if (profile?.url_invite_link) {
        await navigator.clipboard.writeText(profile.url_invite_link);
        toast.success('Ссылка скопирована в буфер обмена')
      }
    } catch (err) {
      toast.error('Ошибка при копировании')
    }
  };
  return (
    <div className={style.friend}>
      <div className={style.boxInfine}>
        <h2 className={style.title}>Друзья</h2>
        <p className={style.descr}>
          Приглашай своих друзей и получай бонусы за их регистрацию!
        </p>
        <div className={style.boxBtn}>
          <Button onClick={handleRefLink} className={style.btnInfite}>Пригласить друзей</Button>
          <Button onClick={copyToRefLink} className={style.btnCopyLink}>
            <CopyIconSvg />
          </Button>
        </div>
        <Link className={style.svgQr} to={"/profile-edit-qr"}>
          <QrIconSvg />
        </Link>
      </div>
      {friends ? <FriendList arr={friends} /> : <LoaderContent />}
    </div>
  );
}

export default InviteFriend;
