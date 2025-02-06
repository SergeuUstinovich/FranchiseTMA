import { useEffect, useState } from "react";
import { DailyBonus, ListCatalog } from "../../components";
import { getAllFranchiseSelector } from "../../providers/StoreProvider/selectors/getAllFranchise";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import style from "./Catalog.module.scss";
import { useSelector } from "react-redux";
import {
  getMainBonuses,
  getMainUser,
} from "../../providers/StoreProvider/selectors/getMain";

function Catalog() {
  const arr = useSelector(getAllFranchiseSelector);
  const mainInfo = useSelector(getMainUser);
  const bonus = useSelector(getMainBonuses);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (mainInfo && mainInfo.can_get_bonus) {
      setIsOpen(true);
    }
  }, [mainInfo]);

  return (
    <>
      <div className={style.box}>{arr && <ListCatalog list={arr} />}</div>
      <SlidingPanel
        darkened
        isOpen={isOpen}
        initialHeight="70%"
        fullHeight="70%"
        onClose={handleClose}
      >
        {bonus && mainInfo ? (
          <DailyBonus
            arr={bonus}
            onClose={handleClose}
            currentDay={mainInfo.count_of_visit_day}
          />
        ) : (
          <div>loading...</div>
        )}
      </SlidingPanel>
    </>
  );
}

export default Catalog;
