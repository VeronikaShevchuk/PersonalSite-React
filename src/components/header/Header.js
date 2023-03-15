import "./style.css";


function Header () {

    return (
        <header className="header">
        <div className="header__wraper">
          <h1 className="header__litle">
            <strong>Hi, my name is <em>Veronika</em></strong><br />
            a frontend developer
          </h1>
          <div className="header__text">
            <p>with passion for learning and creating.</p>
          </div>
          <a href="#!" className="button">Download CV</a>
        </div>
      </header>
    )
}

export default Header;