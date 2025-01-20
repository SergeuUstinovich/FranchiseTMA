import { Link } from "react-router-dom";
import { CopyIconSvg, QrIconSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import style from "./InviteFriend.module.scss";
import { FriendList } from "../../components";

const arr = [
  {
    id: '1',
    img: '',
    firstName: 'Евгений',
    lastName: 'Рогожин',
    userName: '@eugen',
    coin: 835,
    dateInvite: '12.12.2024'
  },
  {
    id: '2',
    img: '',
    firstName: 'Евгений',
    lastName: 'Рогожин',
    userName: '@eugen',
    coin: 834,
    dateInvite: '12.12.2024'
  },
]

function InviteFriend() {
  return (
    <div className={style.friend}>
      <div className={style.boxInfine}>
        <h2 className={style.title}>Друзья</h2>
        <p className={style.descr}>Приглашай своих друзей и получай бонусы за их регистрацию!</p>
        <div className={style.boxBtn}>
          <Button className={style.btnInfite}>Пригласить друзей</Button>
          <Button className={style.btnCopyLink}>
            <CopyIconSvg />
          </Button>
        </div>
        <Link className={style.svgQr} to={'/profile-edit-qr'}>
            <QrIconSvg  />
        </Link>
      </div>
      <FriendList arr={arr} />
    </div>
  );
}

export default InviteFriend;
