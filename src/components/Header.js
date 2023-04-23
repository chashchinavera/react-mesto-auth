import logo from '../images/header__logo.svg';

function Header() {
    return (

        <header className="header page__header">
            <img className="header__logo" src={logo} alt="Логотип Mesto Russia" />
        </header>
    )
};

export default Header;