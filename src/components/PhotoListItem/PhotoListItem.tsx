import { useSelector } from "react-redux";
import { getAllFranchiseSelector } from "../../providers/StoreProvider/selectors/getAllFranchise";
import { useEffect, useState } from "react";
import { AllFranchiseType } from "../../types/AllFranchiseType";
import { useParams } from "react-router-dom";
import ImageContainer from "../../utils/ImageContainer";
import style from "./PhotoListItem.module.scss";
import ModalRoute from "../../ui/ModalRoute/ModalRoute";

const api_url = import.meta.env.VITE_API_PHOTO_URL;

function PhotoListItem() {
  const allFrancise = useSelector(getAllFranchiseSelector);
  const [data, setData] = useState<AllFranchiseType>();
  const { id } = useParams();
  useEffect(() => {
    if (allFrancise) {
      const obj = allFrancise.find((item) => item.id === Number(id));
      setData(obj);
    }
  }, [allFrancise]);
  return (
    <ModalRoute>
      <div className={style.boxPhoto}>
        <h2 className={style.title}>Фото</h2>
        <ul className={style.list}>
          {data?.photos.map((item, index) => (
            <li className={style.item} key={index}>
              <ImageContainer
                heightBlur={169}
                className={style.img}
                src={`${api_url}${item}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </ModalRoute>
  );
}

export default PhotoListItem
