import { FormField } from "../../ui/FormField";
import style from "./EditingProfile.module.scss";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  EditinProfileScheme,
  EditinProfileType,
} from "../../types/EditingProfileType";
import { Button } from "../../ui/Button";
import useMutateAll from "../../utils/useMutateAll";
import { useSelector } from "react-redux";
import { getProfileUser } from "../../providers/StoreProvider/selectors/getProfile";

function EditingProfile() {
  const { editProfileMutate } = useMutateAll();
  const profile = useSelector(getProfileUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditinProfileType>({
    resolver: zodResolver(EditinProfileScheme),
  });

  return (
    <div className={style.editProfile}>
      <form
        className={style.form}
        onSubmit={handleSubmit(({ firstName, lastName, city, phone }) => {
          editProfileMutate.mutate({
            name: firstName,
            last_name: lastName,
            city,
            mobile_phone: phone,
          });
        })}
      >
        <div className={style.boxInput}>
          <FormField errorMessage={errors.firstName?.message} label="Имя">
            <input
              defaultValue={profile?.tg_first_name}
              placeholder="Введите имя"
              {...register("firstName")}
              type="text"
              maxLength={20}
            />
          </FormField>
          <FormField errorMessage={errors.lastName?.message} label="Фамилия">
            <input
              defaultValue={profile?.tg_last_name}
              placeholder="Введите фамилию"
              {...register("lastName")}
              type="text"
              maxLength={20}
            />
          </FormField>
          <FormField errorMessage={errors.city?.message} label="Город">
            <input
              defaultValue={profile?.city}
              placeholder="Введите город"
              {...register("city")}
              type="text"
              maxLength={20}
            />
          </FormField>
          <FormField errorMessage={errors.phone?.message} label="Телефон">
            <input
              defaultValue={profile?.mobile_phone}
              placeholder="Введите номер телефона"
              {...register("phone")}
              type="text"
              maxLength={20}
            />
          </FormField>
        </div>
        <Button className={style.btn} type="submit">
          Сохранить
        </Button>
      </form>
    </div>
  );
}

export default EditingProfile;
