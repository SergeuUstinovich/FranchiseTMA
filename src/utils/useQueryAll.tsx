import { useQuery } from "@tanstack/react-query";
import { getAllFranchise, mainPage, mainStats } from "../api/main";
import { queryClient } from "../api/queryClient";
import { useSearchParams } from "react-router-dom";
import { useTelegram } from "../providers/telegram/telegram";
import { useEffect, useState } from "react";
import { myFavorite } from "../api/profile";

export function useQueryAll() {
  const [searchParams] = useSearchParams();
  const [startInit, setStartInit] = useState(false);
  const { hash } = useTelegram();
  const referralUrl = searchParams.get("start");
  const numericId = referralUrl ? referralUrl.replace("id_", "") : null;
  
  const mainPageQuery = useQuery(
    {
      queryKey: ["main"],
      queryFn: () => mainPage(hash, Number(numericId)),
      enabled: !!hash,
    },
    queryClient
  );
  useEffect(() => {
    if(mainPageQuery.data) {
        setStartInit(true);
    }
  }, [mainPageQuery.data])
  
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

  return { mainPageQuery, mainStatsQuery, allFranchiseQuery, allFavoriteQuery };
}
