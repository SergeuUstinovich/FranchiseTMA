import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { addFavorites } from "../api/main";
import { editProfile, takeRefMoney } from "../api/profile";
import { countVideo } from "../api/video";

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
    },
    queryClient
  );
  return {
    addFavoriteMutate,
    editProfileMutate,
    takeMoneyRefMutate,
    countVideoMutate,
  };
}

export default useMutateAll;
