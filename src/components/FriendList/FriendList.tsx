import { useEffect, useState } from "react";
import { ReFetchSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import style from "./FriendList.module.scss";
import notFriend from "../../assets/png/notFriend.png";
import FriendItem from "./FriendItem";

export interface FriendUser {
  id: string;
  img: string;
  firstName: string;
  lastName: string;
  userName: string;
  coin: number;
  dateInvite: string
}

interface FriendListProps {
  arr: FriendUser[];
}

export function FriendList({ arr }: FriendListProps) {
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);

  const handleRefetch = () => {
    const endTime = new Date().getTime() + 10000;
    localStorage.setItem("timerEndTime", endTime.toString());
    setIsActive(true);
  };

  useEffect(() => {
    const savedEndTime = localStorage.getItem("timerEndTime");
    if (savedEndTime) {
      const currentTime = new Date().getTime();
      const endTime = parseInt(savedEndTime, 10);
      const remainingTime = Math.max((endTime - currentTime) / 1000, 0);
      if (remainingTime > 0) {
        setTime(Math.floor(remainingTime));
        setIsActive(true);
      } else {
        setTime(10);
        setIsActive(false);
        localStorage.removeItem("timerEndTime");
      }
    }
  }, []);

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => {
        if (time > 0) {
          setTime((item) => item - 1);
        } else {
          setIsActive(false);
          setTime(10);
          localStorage.removeItem("timerTime");
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, time]);

  return (
    <div className={style.boxList}>
      <div className={style.infoBoxFriend}>
        <h3 className={style.valueFriend}>
          Приглашенные {arr.length > 0 && `(${arr.length})`}
        </h3>
        <div className={style.refetchBox}>
          <span className={style.timerBox}>{time}c</span>
          <Button
            isDisabled={isActive}
            onClick={handleRefetch}
            className={style.btnRefetch}
          >
            <ReFetchSvg />
          </Button>
        </div>
      </div>
      {arr.length === 0 ? (
        <div className={style.boxNotFriend}>
          <img className={style.imgNotFriend} src={notFriend} alt="" />
          <h3 className={style.titleNotFriend}>Нет друзей</h3>
          <p className={style.descrNotFriend}>
            Приглашай друзей и получайте бонусы. Делитесь ссылкой прямо сейчас!
          </p>
        </div>
      ) : (
        <ul className={style.list}>
          {arr.map((item) => (
            <li className={style.item} key={item.id}>
              <FriendItem
                id={item.id}
                img={item.img}
                firstName={item.firstName}
                lastName={item.lastName}
                userName={item.userName}
                coin={item.coin}
                dateInvite={item.dateInvite}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
