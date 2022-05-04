import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

import Promotion from "../Lib/Icon/Promotion";
import Pizza from "../Lib/Icon/Pizza";
import Sushi from "../Lib/Icon/Sushi";
import Juice from "../Lib/Icon/Juice";

import "swiper/css";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Swiper className="nav__list" spaceBetween={30} slidesPerView={8}>
          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Promotion />

              <span className="nav__link__text">Акции</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Pizza />

              <span className="nav__link__text">Пицца</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Sushi />

              <span className="nav__link__text">Суши</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Juice />

              <span className="nav__link__text">Напитки</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Promotion />

              <span className="nav__link__text">Закуски</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Promotion />

              <span className="nav__link__text">Комбо</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Promotion />

              <span className="nav__link__text">Десерты</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Promotion />

              <span className="nav__link__text">Соусы</span>
            </Link>
          </SwiperSlide>

          <SwiperSlide className="nav__item">
            <Link className="nav__link" to={"/id"}>
              <Promotion />

              <span className="nav__link__text">Соусы</span>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </nav>
  );
};

export default Nav;
