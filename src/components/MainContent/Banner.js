export default function Banner() {
    return(
        <div className="banner">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <h2>Звязок з нами</h2>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-inline banner-social-buttons">
                            <li>
                                <a href="tel: +38 097 000 00 00" className="btn btn-default btn-lg"><i
                                    className="fa fa-phone fa-fw"></i> <span
                                    className="network-name">+38097 000 0000</span></a>
                            </li>
                            <li>
                                <a href="#" className="btn btn-default btn-lg"><i className="fa fa-instagram fa-fw"></i>
                                    <span
                                        className="network-name">Instagram</span></a>
                            </li>
                            <li>
                                <a href="#" className="btn btn-default btn-lg"><i className="fa fa-facebook fa-fw"></i>
                                    <span
                                        className="network-name">Facebook</span></a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

        </div>
    )

}