import { FormField } from "../../ui/FormField";
import style from "./EditingProfile.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditinProfileScheme,
  EditinProfileType,
} from "../../types/EditingProfileType";
import { Button } from "../../ui/Button";

function EditingProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditinProfileType>({
    resolver: zodResolver(EditinProfileScheme),
    defaultValues: {
        firstName: 'Иван',
        lastName: 'Иванов'
    }
  });

  return (
    <div className={style.editProfile}>
      <form
        className={style.form}
        onSubmit={handleSubmit(({ firstName, lastName, city, phone }) => {
          console.log(firstName, lastName, city, phone);
          reset();
        })}
      >
        <div className={style.boxInput}>
          <FormField errorMessage={errors.firstName?.message} label="Имя">
            <input placeholder="Введите имя" {...register("firstName")} type="text" />
          </FormField>
          <FormField errorMessage={errors.lastName?.message} label="Фамилия">
            <input placeholder="Введите фамилию" {...register("lastName")} type="text" />
          </FormField>
          <FormField errorMessage={errors.city?.message} label="Город">
            <input placeholder="Введите город" {...register("city")} type="text" />
          </FormField>
          <FormField errorMessage={errors.phone?.message} label="Телефон">
            <input placeholder="Введите номер телефона" {...register("phone")} type="text" />
          </FormField>
        </div>
        <Button className={style.btn} type="submit">Сохранить</Button>
      </form>
    </div>
  );
}

export default EditingProfile;
