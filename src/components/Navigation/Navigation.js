import {NavLink} from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand lobster" href="/">ПростоЧисто</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <NavLink to="/">Головна</NavLink>
                        </li>
                        <li>
                            <NavLink to="/DryCleaner">Хічистка</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Мийка вікон</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Блог</NavLink>
                        </li>
                        <li>
                            <NavLink to="">Контакти</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}