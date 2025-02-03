import { ListCatalog } from "../../components";
import { getAllFranchiseSelector } from "../../providers/StoreProvider/selectors/getAllFranchise";
import style from "./Catalog.module.scss";
import { useSelector } from "react-redux";

function Catalog() {
  const arr = useSelector(getAllFranchiseSelector)
  return (
    <div className={style.box}>
      {arr && (
        <ListCatalog list={arr} />
      )}
    </div>
  );
}

export default Catalog;
