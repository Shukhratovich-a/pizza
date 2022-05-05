import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";

import Location from "../Lib/Icon/Location";
import Basket from "../Lib/Icon/Basket";
import Logo from "../Lib/Icon/Logo";
import Profile from "../Lib/Icon/Profile";
import Burger from "../Lib/Icon/Burger";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useBurger from "../../Hooks/useBurger";

import "./Header.scss";

const Header = () => {
  let count = 0;

  const screenWidth = useWindowDimensions();
  const [isOpen, setOpen] = useBurger();

  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          {/* HEADER LEFT */}
          <div className="header__top__left">
            <div className="header__location">
              <Location />

              <div className="header__location__select">Москва</div>
            </div>

            {screenWidth > 1020 ? (
              <button className="header__check-address">Проверить адрес</button>
            ) : null}

            <div className="header__delivery-time">
              <span>Среднее время доставки*:</span>

              <strong>00:24:19</strong>
            </div>
          </div>

          {/* HEADER RIGHT */}
          {screenWidth > 880 ? (
            <div className="header__top__right">
              <span className="header__work-time">Время работы: с 11:00 до 23:00</span>

              <button className="header__sign-in">
                <Profile />

                <span>Войти в аккаунт</span>
              </button>
            </div>
          ) : null}
        </div>
      </div>

      <div className="header__bottom">
        <div className="container">
          <Link className="header__link" to={"/"}>
            <Logo />

            <span className="header__link__text">Куда пицца</span>
          </Link>

          <button className="header__button">
            <Basket />

            <span className="header__button__price">{count} ₽</span>
          </button>

          {screenWidth <= 880 ? (
            <button className="header__burger" onClick={() => setOpen(!isOpen)}>
              <Burger isOpen={isOpen} />
            </button>
          ) : null}
        </div>
      </div>

      <Nav />
    </header>
  );
};

export default Header;
