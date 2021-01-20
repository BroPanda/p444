export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <ul className="list-inline">
                            <li>
                                <a href="#home">На головну</a>
                            </li>
                            <li className="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#about">Про нас</a>
                            </li>
                            <li className="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#services">Блог</a>
                            </li>
                            <li className="footer-menu-divider">&sdot;</li>
                            <li>
                                <a href="#contact">Контакти</a>
                            </li>
                        </ul>
                        <p className="copyright text-muted small">
                            KokishGroup 2021</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}