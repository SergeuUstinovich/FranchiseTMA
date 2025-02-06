import { useQuery } from "@tanstack/react-query";
import { getAllFranchise, mainPage, mainStats } from "../api/main";
import { queryClient } from "../api/queryClient";
import { useSearchParams } from "react-router-dom";
import { useTelegram } from "../providers/telegram/telegram";
import { useEffect, useState } from "react";
import { getAchievement, myFavorite, myFriend } from "../api/profile";
import { getVideo } from "../api/video";
import { getTask } from "../api/tasks";

export function useQueryAll() {
  const [searchParams] = useSearchParams();
  const [startInit, setStartInit] = useState(false);
  const { hash } = useTelegram();
  const referralUrl = searchParams.get("id");

  const mainPageQuery = useQuery(
    {
      queryKey: ["main"],
      queryFn: () => mainPage(hash, Number(referralUrl)),
      enabled: !!hash,
    },
    queryClient
  );
  useEffect(() => {
    if (mainPageQuery.data) {
      setStartInit(true);
    }
  }, [mainPageQuery.data]);

  const mainStatsQuery = useQuery(
    {
      queryKey: ["stats"],
      queryFn: () => mainStats(),
      enabled: startInit,
    },
    queryClient
  );

  const allFranchiseQuery = useQuery(
    {
      queryKey: ["allFranchise"],
      queryFn: () => getAllFranchise(),
      enabled: startInit,
    },
    queryClient
  );

  const allFavoriteQuery = useQuery(
    {
      queryKey: ["favorite"],
      queryFn: () => myFavorite(),
      enabled: startInit,
    },
    queryClient
  );

  const allFriendQuery = useQuery(
    {
      queryKey: ["friend"],
      queryFn: () => myFriend(),
      enabled: startInit,
    },
    queryClient
  );

  const allAchievementQuery = useQuery(
    {
      queryKey: ["achievement"],
      queryFn: () => getAchievement(),
      enabled: startInit,
    },
    queryClient
  );

  const allVideoQuery = useQuery(
    {
      queryKey: ["video"],
      queryFn: () => getVideo(),
      enabled: startInit,
    },
    queryClient
  );

  const allTaskQuery = useQuery(
    {
      queryKey: ["task"],
      queryFn: () => getTask(),
      enabled: startInit,
      // refetchInterval: 180000,
    },
    queryClient
  );

  return {
    mainPageQuery,
    mainStatsQuery,
    allFranchiseQuery,
    allFavoriteQuery,
    allFriendQuery,
    allAchievementQuery,
    allVideoQuery,
    allTaskQuery
  };
}
