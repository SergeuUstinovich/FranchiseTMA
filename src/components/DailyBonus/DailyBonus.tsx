import { MainTypeBonusesProps } from "../../types/MainType";
import { Button } from "../../ui/Button";
import imgBonus from "../../assets/png/dailyBonus.png";
import style from "./DailyBonus.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import imgCoinDaily from "../../assets/png/silverCoinDaily.png";
import "swiper/scss";
import useMutateAll from "../../utils/useMutateAll";
import { useEffect } from "react";

interface DailyBonusProps {
  arr: MainTypeBonusesProps[];
  onClose: () => void;
  currentDay: number;
}

export function DailyBonus({ arr, onClose, currentDay }: DailyBonusProps) {
  const { dailyBonusMutate } = useMutateAll();
  
  const handleTakeBonus = () => {
    dailyBonusMutate.mutate();
  };

  useEffect(() => {
    if (dailyBonusMutate.isSuccess) {
      onClose();
    }
  }, [dailyBonusMutate.isSuccess]);

  return (
    <div className={style.dailyBox}>
      <img className={style.img} src={imgBonus} alt="" />
      <h2 className={style.title}>Ваши ежедневные награды</h2>
      <p className={style.descr}>Заходи каждый день и получай бонусы!</p>
      <div className={style.boxSwiper}>
        <Swiper
          initialSlide={currentDay - 1}
          spaceBetween={7}
          slidesPerView={4}
          className={style.swiper}
        >
          {arr.map((item, index) => (
            <SwiperSlide key={index} className={style.slide}>
              <div
                style={
                  item.day === currentDay ? { border: "1px solid #007aff" } : {}
                }
                className={style.boxSlide}
              >
                <img className={style.imgSlide} src={imgCoinDaily} alt="" />
                <p className={style.slideDescr}>+{item.money}</p>
                <p
                  style={
                    item.day === currentDay
                      ? { backgroundColor: "#007aff" }
                      : {}
                  }
                  className={style.slideDay}
                >
                  День {item.day}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Button
        isLoading={dailyBonusMutate.isPending}
        onClick={handleTakeBonus}
        className={style.btn}
      >
        Собрать
      </Button>
    </div>
  );
}
