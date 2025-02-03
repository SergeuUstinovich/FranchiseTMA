import { useEffect, useState } from "react";
import { InfoUser, ListPageUser, StatisticsUser } from "../../components";
import style from "./Profile.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { profileActions } from "../../providers/StoreProvider/slice/profileSlice";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../api/profile";
import { queryClient } from "../../api/queryClient";
import { getMainUser } from "../../providers/StoreProvider/selectors/getMain";

function Profile() {
  const dispatch = useDispatch();
  const checkData = useSelector(getMainUser);
  const [startInit, setStartInit] = useState(false);

  const profileQuery = useQuery(
    {
      queryKey: ["profile"],
      queryFn: () => getProfile(),
      enabled: startInit,
    },
    queryClient
  );
  
  useEffect(() => {
    if (profileQuery.data) {
      dispatch(profileActions.addInfoProfile(profileQuery.data.user));
      dispatch(profileActions.addStata(profileQuery.data.stata));
    }
  }, [profileQuery.data]);

  useEffect(() => {
    if (checkData) {
      setStartInit(true);
    }
  }, [checkData]);
  return (
    <div className={style.profile}>
      <InfoUser />
      <StatisticsUser />
      <ListPageUser />
    </div>
  );
}

export default Profile;
