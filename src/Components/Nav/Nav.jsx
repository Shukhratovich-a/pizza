import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Promotion from "../Lib/Icon/Promotion";
import Pizza from "../Lib/Icon/Pizza";
import Sushi from "../Lib/Icon/Sushi";
import Juice from "../Lib/Icon/Juice";
import Snack from "../Lib/Icon/Snack";
import Combo from "../Lib/Icon/Combo";
import Dessert from "../Lib/Icon/Dessert";
import Souce from "../Lib/Icon/Souce";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

import "swiper/css";
import "./Nav.scss";

const Nav = () => {
  const nav = {
    ru: {
      nav1: "Акции",
      nav2: "Пицца",
      nav3: "Суши",
      nav4: "Напитки",
      nav5: "Закуски",
      nav6: "Комбо",
      nav7: "Десерты",
      nav8: "Соусы",
    },

    en: {
      nav1: "Promotion",
      nav2: "Pizza",
      nav3: "Sushi",
      nav4: "Drinks",
      nav5: "Snack",
      nav6: "Combo",
      nav7: "Dessert",
      nav8: "Souce",
    },

    uz: {
      nav1: "Aksiya",
      nav2: "Pitsa",
      nav3: "Sushi",
      nav4: "Ichimliklar",
      nav5: "Gazak",
      nav6: "Kombo",
      nav7: "Shirinliklar",
      nav8: "Sous",
    },
  };

  const lang = "ru";

  const screenWidth = useWindowDimensions();

  return (
    <nav className="nav">
      <div className="container">
        <Swiper
          className="nav__list"
          spaceBetween={screenWidth <= 500 ? 12 : screenWidth <= 1200 ? 20 : 30}
          // slidesPerView={screenWidth > 1020 ? 8 : screenWidth > 500 ? 6 : "auto"}
          slidesPerView={screenWidth <= 500 ? "auto" : screenWidth <= 1020 ? 6 : 8}
        >
          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Promotion />

              <span className="nav__link__text">{nav[lang].nav1}</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Pizza />

              <span className="nav__link__text">{nav[lang].nav2}</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Sushi />

              <span className="nav__link__text">{nav[lang].nav3}</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Juice />

              <span className="nav__link__text">{nav[lang].nav4}</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Snack />

              <span className="nav__link__text">{nav[lang].nav5}</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Combo />

              <span className="nav__link__text">{nav[lang].nav6}</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Dessert />

              <span className="nav__link__text">{nav[lang].nav7}</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Souce />

              <span className="nav__link__text">{nav[lang].nav8}</span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </nav>
  );
};

export default Nav;
