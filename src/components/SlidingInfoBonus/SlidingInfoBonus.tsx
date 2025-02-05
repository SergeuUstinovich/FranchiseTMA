import imgBonus from "../../assets/png/bonusSlide.png";
import { Button } from "../../ui/Button";
import useMutateAll from "../../utils/useMutateAll";
import silverImg from "../../assets/png/silverCoin.png";
import goldImg from "../../assets/png/goldCoin.png";
import style from "./SlidingInfoBonus.module.scss";
import { useEffect, useState } from "react";
import { useTelegram } from "../../providers/telegram/telegram";
import { typeTasks } from "./typeData";

interface SlidingInfoBonusProps {
  btnType?: boolean;
  title: string;
  onClose: () => void;
  silver_coin: number;
  gold_coin: number;
  exp: number;
  id: number;
  link?: string;
  canCheck?: boolean;
  completed?: boolean;
  type?: string;
}

export function SlidingInfoBonus({
  silver_coin,
  gold_coin,
  exp,
  btnType,
  title,
  onClose,
  id,
  link,
  canCheck,
  completed,
  type,
}: SlidingInfoBonusProps) {
  const {
    takeBonusVideoMutate,
    changeTaskMutate,
    checkTaskMutate,
    checkTaskTgMutate,
  } = useMutateAll();
  const { tg } = useTelegram();
  const [linkTg, setLinkTg] = useState<string>();

  const handleVideoBonus = (id: number) => {
    takeBonusVideoMutate.mutate({ id });
  };

  useEffect(() => {
    if (takeBonusVideoMutate.isSuccess) {
      onClose();
    }
  }, [takeBonusVideoMutate.isSuccess]);

  const handleChangeTasks = (id: number, link: string | undefined) => {
    changeTaskMutate.mutate({ id });
    setLinkTg(link);
    onClose();
  };

  const handleLink = (link: string | undefined) => {
    tg.openLink(link);
  };

  useEffect(() => {
    if (changeTaskMutate.isSuccess) {
      tg.openLink(linkTg);
    }
  }, [changeTaskMutate.isSuccess]);

  const handleCheckTasks = (id: number) => {
    switch (type) {
      case typeTasks.telegram:
        checkTaskTgMutate.mutate({ id });
        break;

      case typeTasks.usual:
        checkTaskMutate.mutate({ id });
        break;
    }
  };

  useEffect(() => {
    if (checkTaskMutate.isSuccess) {
      onClose();
    }
  }, [checkTaskMutate.isSuccess]);

  return (
    <div className={style.boxBonus}>
      <img className={style.imgTitle} src={imgBonus} alt="" />
      <p className={style.descr}>{title}</p>
      <div className={style.boxInfo}>
        {silver_coin > 0 && (
          <div className={style.bonus}>
            <img className={style.imgCoin} src={silverImg} alt="" />+{" "}
            {silver_coin}
          </div>
        )}
        {gold_coin > 0 && (
          <div className={style.bonus}>
            <img className={style.imgCoin} src={goldImg} alt="" />+ {gold_coin}
          </div>
        )}
        {exp > 0 && (
          <div style={{ color: "white" }} className={style.bonus}>
            + {exp} XP
          </div>
        )}
      </div>
      {!btnType ? (
        <Button
          isLoading={takeBonusVideoMutate.isPending}
          className={style.btn}
          onClick={() => handleVideoBonus(id)}
        >
          Собрать
        </Button>
      ) : (
        <div className={style.btnBox}>
          <Button
            onClick={() => handleCheckTasks(id)}
            className={style.btnCheck}
            isDisabled={checkTaskTgMutate.isPending || checkTaskMutate.isPending || !canCheck || completed}
            isLoading={checkTaskMutate.isPending || checkTaskTgMutate.isPending}
          >
            Проверить
          </Button>
          <Button
            onClick={
              !canCheck
                ? () => handleChangeTasks(id, link)
                : () => handleLink(link)
            }
            className={style.btnLink}
            isLoading={changeTaskMutate.isPending}
          >
            Перейти
          </Button>
        </div>
      )}
    </div>
  );
}
