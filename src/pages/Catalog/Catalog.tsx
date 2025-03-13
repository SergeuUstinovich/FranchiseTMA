import { useEffect, useState } from "react";
import { DailyBonus, FilterList, ListCatalog } from "../../components";
import { getAllFranchiseSelector } from "../../providers/StoreProvider/selectors/getAllFranchise";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./Catalog.module.scss";
import { useSelector } from "react-redux";
import {
  getMainBonuses,
  getMainUser,
} from "../../providers/StoreProvider/selectors/getMain";
import { Button } from "../../ui/Button";
import { CloseSvg, FilterSvg } from "../../assets/svg";
import { categoryArr, summArr } from "./dataFilterCategory";
import { AllFranchiseType } from "../../types/AllFranchiseType";
import { LoaderContent } from "../../ui/Loader/LoaderContent";

export interface ArrFilter {
  id: number;
  name: string;
  summ: number;
  isActive: boolean;
}

function Catalog() {
  const arr = useSelector(getAllFranchiseSelector);
  const mainInfo = useSelector(getMainUser);
  const bonus = useSelector(getMainBonuses);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [arrFilter, setArrFilter] = useState<ArrFilter[]>([]);
  const [categoryArrays, setCategoryArrays] = useState(categoryArr);
  const [summArrays, setSummArrays] = useState(summArr);
  const [filteredFranchiseArr, setFilteredFranchiseArr] = useState<
    AllFranchiseType[] | undefined
  >();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpenFilter = () => {
    setIsOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setIsOpenFilter(false);
  };

  useEffect(() => {
    if (mainInfo && mainInfo.can_get_bonus) {
      setIsOpen(true);
    }
  }, [mainInfo]);

  useEffect(() => {
    const newArrFilter = [...categoryArrays, ...summArrays].filter(
      (item) => item.isActive
    );

    setArrFilter(newArrFilter);
  }, [categoryArrays, summArrays]);

  const handleRemoveItem = (id: number) => {
    setCategoryArrays((prevCategoryArrays) =>
      prevCategoryArrays.map((item) =>
        item.id === id ? { ...item, isActive: false } : item
      )
    );

    setSummArrays((prevSummArrays) =>
      prevSummArrays.map((item) =>
        item.id === id ? { ...item, isActive: false } : item
      )
    );

    setArrFilter((prevArrFilter) =>
      prevArrFilter.filter((item) => item.id !== id)
    );
  };

  useEffect(() => {
    const newFilteredFranchiseArr = arr?.filter((franchise) => {
      return franchise.category.some((category) =>
        arrFilter.some(
          (filterItem) =>
            (filterItem.isActive && filterItem.name === category.name) ||
            filterItem.summ >= category.summ
        )
      );
    });
    newFilteredFranchiseArr?.length === 0
      ? setFilteredFranchiseArr(arr)
      : setFilteredFranchiseArr(newFilteredFranchiseArr);
  }, [arr, arrFilter]);

  return (
    <>
      <div className={style.boxFilter}>
        <div
          style={arrFilter.length > 0 ? { marginBottom: "8px" } : {}}
          className={style.titleBox}
        >
          <h2 className={style.title}>Каталог франшиз</h2>
          <Button onClick={handleOpenFilter} className={style.btn}>
            <FilterSvg />
          </Button>
        </div>
        <ul className={style.list}>
          {arrFilter.map((item) => (
            <li className={style.item} key={item.id}>
              <p className={style.descr}>{item.name}</p>
              <Button
                onClick={() => handleRemoveItem(item.id)}
                className={style.btn}
              >
                <CloseSvg />
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className={style.box}>
        {filteredFranchiseArr ? (
          <ListCatalog list={filteredFranchiseArr} />
        ) : (
          <LoaderContent />
        )}
      </div>
      <SlidingPanel
        darkened
        isOpen={isOpen}
        onClose={handleClose}
      >
        {bonus && mainInfo ? (
          <DailyBonus
            arr={bonus}
            onClose={handleClose}
            currentDay={mainInfo.count_of_visit_day}
          />
        ) : (
          <LoaderContent />
        )}
      </SlidingPanel>
      <SlidingPanel
        darkened
        isOpen={isOpenFilter}
        onClose={handleCloseFilter}
        className={style.slideFilter}
      >
        <FilterList
          onClose={handleCloseFilter}
          categoryArr={categoryArrays}
          summArr={summArrays}
          setCategoryArrays={setCategoryArrays}
          setSummArrays={setSummArrays}
        />
      </SlidingPanel>
    </>
  );
}

export default Catalog;
