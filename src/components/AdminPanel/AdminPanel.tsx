import { useForm } from "react-hook-form";
import { FormField } from "../../ui/FormField";
import style from "./AdminPanel.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdminScheme, AdminType } from "../../types/AdminType";
import { Button } from "../../ui/Button";
import silverImg from "../../assets/png/silverCoin.png";
import goldImg from "../../assets/png/goldCoin.png";
import { ChangeEvent, useState } from "react";
import { RadioCustomSvg } from "../../assets/svg";
import useMutateAll from "../../utils/useMutateAll";

export function AdminPanel() {
  const [selectedOption, setSelectedOption] = useState("silver");
  const { financeMutate } = useMutateAll();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminType>({
    resolver: zodResolver(AdminScheme),
  });

  return (
    <div className={style.boxAdmin}>
      <h2 className={style.title}>Админ-панель</h2>
      <form
        className={style.form}
        onSubmit={handleSubmit(({ tg_id, amount }) => {
          financeMutate.mutate({
            id: Number(tg_id),
            amount: Number(amount),
            currency: selectedOption,
          });
        })}
      >
        <div className={style.boxInput}>
          <FormField errorMessage={errors.tg_id?.message} label="Telegram ID">
            <input
              placeholder="Введите Telegram id"
              {...register("tg_id")}
              type="text"
            />
          </FormField>
          <div className={style.boxCoin}>
            <FormField className={`${style.label}`} label="Валюта">
              <div
                className={`${style.boxRadio} ${
                  selectedOption === "silver" ? style.active : ""
                }`}
              >
                <div className={style.boxValut}>
                  <div className={style.boxName}>
                    <img className={style.img} src={silverImg} alt="" />
                    <p className={style.descrCoin}>Серебро</p>
                  </div>
                  <RadioCustomSvg
                    className={`${style.svg} ${
                      selectedOption === "silver" ? style.activeSvg : ""
                    }`}
                  />
                  <input
                    value="silver"
                    checked={selectedOption === "silver"}
                    onChange={handleChange}
                    className={style.radio}
                    type="radio"
                  />
                </div>
              </div>
            </FormField>
            <FormField className={`${style.label} ${style.hidden}`} label="0">
              <div
                className={`${style.boxRadio} ${
                  selectedOption === "gold" ? style.active : ""
                }`}
              >
                <div className={style.boxValut}>
                  <div className={style.boxName}>
                    <img className={style.img} src={goldImg} alt="" />
                    <p className={style.descrCoin}>Золото</p>
                  </div>
                  <RadioCustomSvg
                    className={`${style.svg} ${
                      selectedOption === "gold" ? style.activeSvg : ""
                    }`}
                  />
                  <input
                    value="gold"
                    checked={selectedOption === "gold"}
                    onChange={handleChange}
                    className={style.radio}
                    type="radio"
                  />
                </div>
              </div>
            </FormField>
          </div>
          <FormField
            errorMessage={errors.amount?.message}
            label="Количество монет"
          >
            <input
              placeholder="Введите число"
              {...register("amount")}
              type="text"
            />
          </FormField>
        </div>
        <Button className={style.btn}>Отправить</Button>
      </form>
    </div>
  );
}
