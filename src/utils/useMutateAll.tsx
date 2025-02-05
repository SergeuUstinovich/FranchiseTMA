import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { addFavorites } from "../api/main";
import { editProfile, takeRefMoney } from "../api/profile";
import {
  changeCurseStatus,
  compliteCurseStatus,
  countVideo,
  takeBonusVideo,
} from "../api/video";
import toast from "react-hot-toast";
import { changeTasks, checkTasks, checkTasksTg } from "../api/tasks";

function useMutateAll() {
  const addFavoriteMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => addFavorites(data.id),
    },
    queryClient
  );
  const editProfileMutate = useMutation(
    {
      mutationFn: (data: {
        name: string;
        last_name: string;
        city: string;
        mobile_phone: string;
      }) =>
        editProfile(data.name, data.last_name, data.city, data.mobile_phone),
    },
    queryClient
  );
  const takeMoneyRefMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => takeRefMoney(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["friend"] });
        queryClient.invalidateQueries({ queryKey: ["stats"] });
      },
    },
    queryClient
  );

  const countVideoMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => countVideo(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["video"] });
      },
    },
    queryClient
  );

  const changeCurseMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => changeCurseStatus(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["video"] });
      },
    },
    queryClient
  );

  const compliteCurseMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => compliteCurseStatus(data.id),
      onSuccess: () => {
        toast.success("Бонус получен");
        queryClient.invalidateQueries({ queryKey: ["stats"] });
        queryClient.invalidateQueries({ queryKey: ["video"] });
      },
      onError: () => {
        queryClient.invalidateQueries({ queryKey: ["video"] });
      },
    },
    queryClient
  );

  const takeBonusVideoMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => takeBonusVideo(data.id),
      onSuccess: () => {
        toast.success("Бонус получен");
        queryClient.invalidateQueries({ queryKey: ["stats"] });
        queryClient.invalidateQueries({ queryKey: ["video"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    },
    queryClient
  );

  const changeTaskMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => changeTasks(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["task"] });
      },
      onError: (err) => {
        toast.error(err.message);
      },
    },
    queryClient
  );

  const checkTaskMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => checkTasks(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["task"] });
      },
    },
    queryClient
  );

  const checkTaskTgMutate = useMutation(
    {
      mutationFn: (data: { id: number }) => checkTasksTg(data.id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["task"] });
      },
    },
    queryClient
  );
  return {
    addFavoriteMutate,
    editProfileMutate,
    takeMoneyRefMutate,
    countVideoMutate,
    changeCurseMutate,
    compliteCurseMutate,
    takeBonusVideoMutate,
    changeTaskMutate,
    checkTaskMutate,
    checkTaskTgMutate
  };
}

export default useMutateAll;
