import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import style from "./SwiperImg.module.scss";

const api_url = import.meta.env.VITE_API_PHOTO_URL;

function SwiperImg({ array }: { array: string[] }) {
  return (
    <Swiper spaceBetween={4} slidesPerView={3.2} className={style.swiper}>
      {array.map((item, index) => (
        <SwiperSlide key={index} className={style.slide}>
          <div className={style.boxSlide}>
            <img className={style.img} src={`${api_url}${item}`} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperImg
