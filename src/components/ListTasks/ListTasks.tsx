import { ArrowSvg } from "../../assets/svg";
import { AllTasksType, AllTasksTypeKey } from "../../types/AllTasksType";
import silverCoin from "../../assets/png/silverCoin.png";
import goldCoin from "../../assets/png/goldCoin.png";
import style from "./ListTasks.module.scss";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import { useState } from "react";
import { SlidingInfoBonus } from "../SlidingInfoBonus/SlidingInfoBonus";
import ImageContainer from "../../utils/ImageContainer";

const api_url = import.meta.env.VITE_API_PHOTO_URL;

interface ListTasksProps {
  arr: AllTasksTypeKey[];
}

export function ListTasks({ arr }: ListTasksProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [task, setTask] = useState<AllTasksType | undefined>();

  const handleOpen = (id: number) => {
    let foundLesson = null;
    for (const item of arr) {
      foundLesson = item.tasks.find((task) => task.id === id);
      if (foundLesson) break;
    }

    if (foundLesson) {
      setTask(foundLesson);
      foundLesson = null;
    }
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <ul className={style.list}>
        {arr.map((item, index) => (
          <li className={style.item} key={index}>
            <h2 className={style.title}>{item.title}</h2>
            <ul className={style.listTask}>
              {item.tasks.map((tasks) => (
                <li
                  onClick={() => handleOpen(tasks.id)}
                  key={tasks.id}
                  className={style.itemTask}
                >
                  <div className={style.boxItem}>
                    <ImageContainer heightBlur={44} widthBlur={44} className={style.img} src={`${api_url}${tasks.image}`} />
                    <div className={style.infoItem}>
                      <h3 className={style.titleTask}>{tasks.text}</h3>
                      <div className={style.coinBox}>
                        {tasks.silver_coin > 0 && (
                          <div className={style.coin}>
                            <img
                              className={style.imgCoin}
                              src={silverCoin}
                              alt=""
                            />
                            <span className={style.span}>
                              + {tasks.silver_coin}
                            </span>
                          </div>
                        )}
                        {tasks.gold_coin > 0 && (
                          <div className={style.coin}>
                            <img
                              className={style.imgCoin}
                              src={goldCoin}
                              alt=""
                            />
                            <span className={style.span}>
                              + {tasks.gold_coin}
                            </span>
                          </div>
                        )}
                        {tasks.exp > 0 && (
                          <div className={style.coin}>
                            <span className={style.span}>+ {tasks.exp} XP</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <ArrowSvg className={style.svg} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <SlidingPanel
        isOpen={isOpen}
        onClose={handleClose}
        initialHeight="60%"
        fullHeight="60%"
      >
        {task && (
          <SlidingInfoBonus
            onClose={handleClose}
            silver_coin={task.silver_coin}
            gold_coin={task.gold_coin}
            exp={task.exp}
            id={task.id}
            title={task.text}
            btnType
            link={task.link}
            canCheck={task.can_check}
            completed={task.completed}
            type={task.type}
          />
        )}
      </SlidingPanel>
    </>
  );
}
