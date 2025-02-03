import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../api/queryClient";
import { addFavorites } from "../api/main";
import { editProfile } from "../api/profile";

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
  return { addFavoriteMutate, editProfileMutate };
}

export default useMutateAll;
