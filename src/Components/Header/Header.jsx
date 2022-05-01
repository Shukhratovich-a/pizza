import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="header__top__left">
            <div className="header__location">
              <div className="header__location__select">Москва</div>
            </div>
          </div>

          <button className="header__check-address">Проверить адрес</button>

          <div className="header__top__right"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
