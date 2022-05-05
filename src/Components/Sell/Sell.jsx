import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import useWindowDimensions from "../../Hooks/useWindowDimensions";

import SellFirst from "../../Assets/Images/Sell-1.jpg";
import SellSecond from "../../Assets/Images/Sell-2.jpg";

import "./Sell.scss";

const Sell = () => {
  const screenWidth = useWindowDimensions();
console.log((screenWidth - 40 - 60) / 300);
  return (
    <section className="sell">
      <div className="container">
        <Swiper
          className="sell__list"
          spaceBetween={screenWidth <= 1200 ? 30 : 30}
          slidesPerView={screenWidth > 1330 ? 4 : (screenWidth - 40 - 60) / 300}
          // slidesPerView={screenWidth <= 1100 ? 3.5 : screenWidth <= 965 ? 2 : 4}
          // slidesPerView={4}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
        >
          <SwiperSlide className="sell__item">
            <img
              className="sell__item__image"
              src={SellFirst}
              alt="3 средние пиццы от 999 рублей"
              width={300}
              height={345}
            />

            <div className="sell__item__inner">
              <p className="sell__item__text">3 средние пиццы от 999 рублей</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sell__item">
            <img
              className="sell__item__image"
              src={SellSecond}
              alt="3 средние пиццы от 999 рублей"
              width={300}
              height={345}
            />

            <div className="sell__item__inner">
              <p className="sell__item__text">Кэшбек 10% на самовывоз (доставка)</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sell__item">
            <img
              className="sell__item__image"
              src={SellFirst}
              alt="3 средние пиццы от 999 рублей"
              width={300}
              height={345}
            />

            <div className="sell__item__inner">
              <p className="sell__item__text">3 средние пиццы от 999 рублей</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sell__item">
            <img
              className="sell__item__image"
              src={SellSecond}
              alt="3 средние пиццы от 999 рублей"
              width={300}
              height={345}
            />

            <div className="sell__item__inner">
              <p className="sell__item__text">Кэшбек 10% на самовывоз (доставка)</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sell__item">
            <img
              className="sell__item__image"
              src={SellFirst}
              alt="3 средние пиццы от 999 рублей"
              width={300}
              height={345}
            />

            <div className="sell__item__inner">
              <p className="sell__item__text">3 средние пиццы от 999 рублей</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sell__item">
            <img
              className="sell__item__image"
              src={SellSecond}
              alt="3 средние пиццы от 999 рублей"
              width={300}
              height={345}
            />

            <div className="sell__item__inner">
              <p className="sell__item__text">Кэшбек 10% на самовывоз (доставка)</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sell__item">
            <img
              className="sell__item__image"
              src={SellFirst}
              alt="3 средние пиццы от 999 рублей"
              width={300}
              height={345}
            />

            <div className="sell__item__inner">
              <p className="sell__item__text">3 средние пиццы от 999 рублей</p>
            </div>
          </SwiperSlide>

          <SwiperSlide className="sell__item">
            <img
              className="sell__item__image"
              src={SellSecond}
              alt="3 средние пиццы от 999 рублей"
              width={300}
              height={345}
            />

            <div className="sell__item__inner">
              <p className="sell__item__text">Кэшбек 10% на самовывоз (доставка)</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Sell;
