import { useEffect, useState } from "react";
import {
  FavoritesSvg,
  DocumentSvg,
  StatisticksSvg,
  PresentationSvg,
} from "../../assets/svg";
import { Button } from "../../ui/Button";
import style from "./InfoPageCatalog.module.scss";
import { classNames } from "../../utils/classNames";
import Descr from "./Descr";
import BlockLink from "./BlockLink";
import support from "../../assets/svg/support.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllFranchiseSelector } from "../../providers/StoreProvider/selectors/getAllFranchise";
import { Link, useParams } from "react-router-dom";
import { AllFranchiseType } from "../../types/AllFranchiseType";
import {
  // declensionDays,
  declensionMonths,
} from "../../helpers/declensionMonth";
import ImageContainer from "../../utils/ImageContainer";
import SwiperImg from "../../ui/Swiper/SwiperImg";
import useMutateAll from "../../utils/useMutateAll";
import { allFranchiseActions } from "../../providers/StoreProvider/slice/allFranchiseSlice";
import { queryClient } from "../../api/queryClient";
import { useTelegram } from "../../providers/telegram/telegram";

const api_url = import.meta.env.VITE_API_PHOTO_URL;

function InfoPageCatalog() {
  const [isExpanded, setIsExpanded] = useState(false);
  const allFrancise = useSelector(getAllFranchiseSelector);
  const [data, setData] = useState<AllFranchiseType>();
  const [truncatedDescr, setTruncatedDescr] = useState<string>("");
  const { addFavoriteMutate, crmBonusMutate } = useMutateAll();
  const dispatch = useDispatch();
  const { id } = useParams();
  const {tg} = useTelegram()

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCrm = (id: number) => {
    crmBonusMutate.mutate({ id });
  };

  const handleLinkFBS = (link: string) => {
    tg.openLink(link)
  }

  useEffect(() => {
    if (data) {
      const truncatedDescr =
        data.description.length > 100
          ? data.description.substring(0, 120) + "..."
          : data.description;
      setTruncatedDescr(truncatedDescr);
    }
  }, [data]);

  const mods = {
    [style.expand]: isExpanded,
  };
  useEffect(() => {
    if (allFrancise) {
      const obj = allFrancise.find((item) => item.id === Number(id));
      setData(obj);
    }
  }, [allFrancise]);

  const handleFavorites = (id: number) => {
    addFavoriteMutate.mutate({ id });
  };

  useEffect(() => {
    if (addFavoriteMutate.isSuccess) {
      dispatch(allFranchiseActions.addAllFranchise(addFavoriteMutate.data));
      queryClient.invalidateQueries({ queryKey: ["favorite"] });
    }
  }, [addFavoriteMutate.isSuccess, addFavoriteMutate.isError]);

  if (!data) {
    return null;
  }

  return (
    <div className={style.box}>
      <div className={style.blockImg}>
        <ImageContainer
          className={style.img}
          src={`${api_url}${data.logo_url}`}
          alt={data.name}
          x1x16={false}
        />
        <Button
          onClick={() => handleFavorites(data.id)}
          className={style.favorites}
          isDisabled={addFavoriteMutate.isPending}
        >
          <FavoritesSvg className={data.favorite ? style.isfavorites : ""} />
        </Button>
      </div>
      <div className={style.contentBox}>
        <h2 style={{ fontSize: "24px" }} className={style.title}>
          {data.name}
        </h2>
        <div
          className={classNames(style.descr, mods, [])}
          dangerouslySetInnerHTML={{
            __html: isExpanded ? data.description : truncatedDescr,
          }}
        />
        {data.description.length > 100 && (
          <Button onClick={toggleExpansion} className={style.moreDescr}>
            {" "}
            {isExpanded ? "Скрыть" : "Читать полностью"}{" "}
          </Button>
        )}
      </div>
      <div className={style.contentBox}>
        <h2 className={style.title}>Условия франшизы</h2>
        <Descr descr="Инвестиции" span={data.investment} />
        <Descr descr="Паушальный взнос" span={data.paysh} />
        <Descr descr="Роялти" span={`${data.royalty}%`} />
        <Descr descr="Год основания" span={data.year_of_foundation} />
        <Descr descr="География" span={data.geography} />
      </div>
      <div className={style.contentBox}>
        <h2 className={style.title}>Доходы</h2>
        <Descr descr="Чистая прибыль" span={data.profit} />
        <Descr descr="Окупаемость" span={declensionMonths(data.payback)} />
        <Descr
          onClick={() => handleLinkFBS(data.url_franchise)}
          isLink
          descr="Сайт франшизы"
          span={data.url_franchise.replace(/^https?:\/\//, '').replace(/\/$/, '')}
        />
      </div>
      {data.package_of_services && data.package_of_services.length > 0 && (
        <div className={style.contentBox}>
          <h2 className={style.title}>Пакет услуг</h2>
          <ul className={style.listTeg}>
            {data.package_of_services.map((item) => (
              <li key={item.id} className={style.itemTeg}>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {data.photos && data.photos.length > 0 && (
        <div className={style.contentBox}>
          <div className={style.photoBox}>
            <h2 style={{ margin: "0" }} className={style.title}>
              Фото
            </h2>
            <Button className={style.allPhoto}>
              <Link to={`/catalog/${data.id}/photo`}>Смотреть все</Link>
            </Button>
          </div>
          <SwiperImg array={data.photos} />
        </div>
      )}
      <BlockLink
        mgBot={8}
        svg={<PresentationSvg />}
        title="Презентация продукта"
        link={data.presentation}
      />
      <BlockLink
        mgBot={8}
        svg={<StatisticksSvg />}
        title="Финансовая модель"
        link={data.model_of_finance}
      />
      <BlockLink
        mgBot={8}
        svg={<DocumentSvg />}
        title="Договор"
        link={data.dogovor}
      />
      <div className={style.boxBtn}>
        <Button style={{ maxWidth: "48px" }} className={style.btn}>
          <img src={support} alt="" />
        </Button>
        <Button
          isLoading={crmBonusMutate.isPending}
          onClick={() => handleCrm(data.id)}
          isDisabled={!data.available}
          className={style.btn}
        >
          Новая сделка
        </Button>
      </div>
    </div>
  );
}

export default InfoPageCatalog;
