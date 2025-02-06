import { Dispatch, SetStateAction, useState } from "react";
import { SwitchOption } from "..";
import { ArrFilter } from "../../pages/Catalog/Catalog";
import style from "./FilterList.module.scss";
import FilterType from "./FilterType";
import { Button } from "../../ui/Button";

interface FilterListProps {
  categoryArr: ArrFilter[];
  summArr: ArrFilter[];
  onClose: () => void;
  setCategoryArrays: Dispatch<SetStateAction<ArrFilter[]>>;
  setSummArrays: Dispatch<SetStateAction<ArrFilter[]>>;
}

type FilterType = "category" | "investments";

export function FilterList({
  categoryArr,
  summArr,
  onClose,
  setCategoryArrays,
  setSummArrays,
}: FilterListProps) {
  const [filterType, setFilterType] = useState<FilterType>("category");
  const handleClose = () => {
    onClose();
  };
  return (
    <div className={style.boxFilter}>
      <div>
        <h2 className={style.title}>Фильтр</h2>
        <div className={style.switcher}>
          <SwitchOption
            isActive={filterType === "category"}
            onClick={() => setFilterType("category")}
            className={style.category}
            title="Категории"
          />

          <SwitchOption
            isActive={filterType === "investments"}
            onClick={() => setFilterType("investments")}
            className={style.investments}
            title="Инвестиции"
          />
        </div>
        {filterType === "category" ? (
          <FilterType arr={categoryArr} setFilter={setCategoryArrays} />
        ) : (
          <FilterType arr={summArr} setFilter={setSummArrays} />
        )}
      </div>
      <div className={style.boxBtn}>
        <Button className={style.btn} onClick={handleClose}>
          Выбрать
        </Button>
      </div>
    </div>
  );
}
