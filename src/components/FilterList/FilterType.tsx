import { Dispatch, SetStateAction } from "react";
import { ArrFilter } from "../../pages/Catalog/Catalog";
import style from "./FilterList.module.scss";
import { Button } from "../../ui/Button";

interface FilterTypeProps {
  arr: ArrFilter[];
  setFilter: Dispatch<SetStateAction<ArrFilter[]>>;
}

function FilterType({ arr, setFilter }: FilterTypeProps) {
  const handleFilter = (id: number) => {
    const newArr = arr.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });
    setFilter(newArr);
  };

  return (
    <ul className={style.listFilter}>
      {arr.map((item) => (
        <li className={style.itemFilter} key={item.id}>
          <Button
            onClick={() => handleFilter(item.id)}
            className={style.itemBtn}
          >
            <p className={style.descrFilter}>{item.name}</p>
            <div
              className={`${style.checkFilter} ${
                item.isActive ? style.isCheck : ""
              }`}
            ></div>
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default FilterType;
