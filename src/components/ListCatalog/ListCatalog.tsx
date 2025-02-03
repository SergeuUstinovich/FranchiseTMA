import { Link } from "react-router-dom";
import style from "./ListCatalog.module.scss";
import { FavoritesSvg, LockLvlSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import { AllFranchiseType } from "../../types/AllFranchiseType";
import useMutateAll from "../../utils/useMutateAll";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allFranchiseActions } from "../../providers/StoreProvider/slice/allFranchiseSlice";
import { queryClient } from "../../api/queryClient";

interface ListCatalogProps {
  list: AllFranchiseType[];
}

const api_url = import.meta.env.VITE_API_PHOTO_URL;

export function ListCatalog({ list }: ListCatalogProps) {
  const { addFavoriteMutate } = useMutateAll();
  const dispatch = useDispatch();

  const handleFavorites = (id: number) => {
    addFavoriteMutate.mutate({ id });
  };

  useEffect(() => {
    if (addFavoriteMutate.isSuccess) {
      dispatch(allFranchiseActions.addAllFranchise(addFavoriteMutate.data));
      queryClient.invalidateQueries({queryKey: ["favorite"]})
    }
  }, [addFavoriteMutate.isSuccess, addFavoriteMutate.isError]);

  return (
    <ul className={style.list}>
      {list.map((item) => (
        <li className={style.item} key={item.id}>
          <div className={style.boxImg}>
            <img
              className={style.img}
              src={`${api_url}${item.logo_url}`}
              alt={item.name}
            />
            {!item.available && (
              <div className={style.blockLvl}>
                <div className={style.boxLvlOpen}>
                  <LockLvlSvg className={style.svgLock} />
                  <p className={style.lvlOpenDescr}>
                    Доступно на {item.lvl} уровне
                  </p>
                </div>
              </div>
            )}
          </div>
          <h2 className={style.title}>{item.name}</h2>
          <p className={style.descr}>{item.description}</p>
          <div className={style.boxNumber}>
            <p className={style.numberDescr}>
              Инвестиции: <span className={style.span}>{item.investment}</span>
            </p>
            <p className={style.numberDescr}>
              Роялти: <span className={style.span}>{item.royalty}%</span>
            </p>
          </div>
          <div className={style.boxNumberStart}>
            <p className={style.numberDescr}>
              Чистая прибыль: <span className={style.span}>{item.profit}</span>
            </p>
          </div>

          <Link className={style.link} to={`/catalog/${item.id}`}>
            Подробнее
          </Link>
          <Button
            isDisabled={addFavoriteMutate.isPending}
            onClick={() => handleFavorites(item.id)}
            className={style.favorites}
          >
            <FavoritesSvg className={item.favorite ? style.isfavorites : ""} />
          </Button>
        </li>
      ))}
    </ul>
  );
}
