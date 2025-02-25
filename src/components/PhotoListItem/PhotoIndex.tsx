import { useNavigate, useParams } from "react-router";
import style from "./PhotoListItem.module.scss";
import ImageContainer from "../../utils/ImageContainer";
import { useEffect, useState } from "react";
import { Swiper as SwiperClass } from "swiper/types";
import { CrossSvg } from "../../assets/svg";
import { Button } from "../../ui/Button";
import { useSelector } from "react-redux";
import { getAllFranchiseSelector } from "../../providers/StoreProvider/selectors/getAllFranchise";
import { AllFranchiseType } from "../../types/AllFranchiseType";
import Modal from "../../ui/Modal/Modal";
import { CustomSwiper } from "../../ui/CustomSwiper/CustomSwiper";

const api_url = import.meta.env.VITE_API_BASE_URL;

function PhotoIndex() {
  const allFrancise = useSelector(getAllFranchiseSelector);
  const { index, id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  const [data, setData] = useState<AllFranchiseType>();

  useEffect(() => {
    if (allFrancise) {
      const obj = allFrancise.find((item) => item.id === Number(id));
      setData(obj);
    }
  }, [allFrancise]);

  const handleNav = () => {
    navigate(`/catalog/${id}/photo/`);
  };

  const config = {
    spaceBetween: 0,
    slidesPerView: 1,
    initialSlide: index ? Number(index) : 0,
    onSlideChange: (swiper: SwiperClass) => setCurrentSlide(swiper.activeIndex),
  };

  return (
    <Modal isOpen>
      <div className={style.boxCount}>
        <p className={style.descrNumber}>
          {currentSlide + 1} из {data?.photos.length}
        </p>
        <Button onClick={handleNav}>
          <CrossSvg className={style.svg} />
        </Button>
      </div>
      <div className={style.boxPhoto}>
        <CustomSwiper
          classNameSlide={style.slide}
          classNameSwiper={style.swiper}
          config={config}
        >
          {data?.photos.map((item, value) => (
            <div className={style.boxImg} key={value}>
              <ImageContainer
                className={style.img}
                src={`${api_url}/${item}`}
                x1x16={false}
              />
            </div>
          ))}
        </CustomSwiper>
      </div>
    </Modal>
  );
}

export default PhotoIndex;
