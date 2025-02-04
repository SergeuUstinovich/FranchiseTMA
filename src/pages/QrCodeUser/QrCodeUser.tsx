import { useSelector } from "react-redux";
import { Button } from "../../ui/Button";
import { getProfileUser } from "../../providers/StoreProvider/selectors/getProfile";
import { displayName } from "../../helpers/truncateText";
import style from "./QrCodeUser.module.scss";
import QRCode from "react-qr-code";
import { dataColor } from "./dataColor";
import { useEffect, useState } from "react";
import { useTelegram } from "../../providers/telegram/telegram";
import { Navigate } from "react-router-dom";

function QrCodeUser() {
  const profile = useSelector(getProfileUser);
  const [data, setData] = useState(dataColor);
  const [activeColor, setActiveColor] = useState(() => {
    return localStorage.getItem("activeColor") || "white";
  });

  const { tg } = useTelegram();

  const handleRefLink = () => {
    const link =
      `https://t.me/share/url?url=${profile?.url_invite_link}`;
    tg.openTelegramLink(link);
  };

  const handleSwitchColor = (id: string) => {
    const newData = data.map((item) =>
      item.id === id ? { ...item, active: true } : { ...item, active: false }
    );

    setData(newData);

    const activeItem = newData.find((item) => item.active);
    const newActiveColor = activeItem ? activeItem.color : "white";

    setActiveColor(newActiveColor);
    localStorage.setItem("activeColor", newActiveColor);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem("activeColor");
    if (savedColor) {
      setActiveColor(savedColor);
      setData((prevData) =>
        prevData.map((item) =>
          item.color === savedColor
            ? { ...item, active: true }
            : { ...item, active: false }
        )
      );
    }
  }, []);

  if (!profile) {
    return <Navigate to={'/'} />;
  }
  
  return (
    <div className={style.box}>
      <div className={style.qrUser}>
        <h2 className={style.title}>
          {displayName(
            30,
            profile.tg_first_name,
            profile.tg_last_name,
            profile.tg_username
          )}
        </h2>
        <div className={style.boxImg}>
          <QRCode
            size={256}
            style={{ height: "auto", maxWidth: "100%", width: "100%" }}
            value={profile.url_invite_link}
            viewBox={`0 0 256 256`}
            bgColor={activeColor}
          />
        </div>
        <p className={style.descr}>Наведите камеру на QR - код</p>
      </div>
      <ul className={style.list}>
        {data.map((item) => (
          <li
            onClick={() => handleSwitchColor(item.id)}
            className={style.item}
            style={{ backgroundColor: item.color }}
            key={item.id}
          >
            {item.active && <div className={style.active} />}
          </li>
        ))}
      </ul>
      <Button onClick={handleRefLink} className={style.btn}>Поделиться</Button>
    </div>
  );
}

export default QrCodeUser;
