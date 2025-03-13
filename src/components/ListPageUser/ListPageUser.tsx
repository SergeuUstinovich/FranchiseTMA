import { Link } from "react-router-dom";
import { dataPage } from "./dataPage";
import style from "./ListPageUser.module.scss";
import { ArrowSvg } from "../../assets/svg";
import imgAdmin from "../../assets/svg/admin.svg";
import { useState } from "react";
import SlidingPanel from "../../ui/SlidingPanel/SlidingPanel";
import { AdminPanel } from "..";
import { useSelector } from "react-redux";
import { getMainUser } from "../../providers/StoreProvider/selectors/getMain";

export function ListPageUser() {
  const admin = useSelector(getMainUser)
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
    <div className={style.box}>
      <ul className={style.list}>
        {admin?.is_admin && (
          <li onClick={handleOpen} className={style.item}>
            <div className={style.link}>
              <div className={style.namePath}>
                <div className={style.boxSvg}>
                  <img src={imgAdmin} alt="" />
                </div>
                <p className={style.descr}>Админ панель</p>
              </div>
              <ArrowSvg />
            </div>
          </li>
        )}
        {dataPage.map((item) => (
          <li className={style.item} key={item.id}>
            <Link className={style.link} to={item.path}>
              <div className={style.namePath}>
                <div className={style.boxSvg}>{item.svg}</div>
                <p className={style.descr}>{item.title}</p>
              </div>
              <ArrowSvg />
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <SlidingPanel onClose={handleClose} isOpen={isOpen} lazy>
        <AdminPanel />
    </SlidingPanel>
    </>
    
  );
}
