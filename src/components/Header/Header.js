export default function Header() {
    return (
        <div className="intro-header">

            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="intro-message">
                            <h1 className="lobster">ПростоЧисто</h1>
                            <h3>Якісне прибирання вашої оселі у Львові та області!</h3>
                            <hr className="intro-divider"/>
                                <ul className="list-inline intro-social-buttons">
                                    <li>
                                        <a href="tel: +38 097 000 00 00" className="btn btn-default btn-lg"><i
                                            className="fa fa-phone fa-fw"></i> <span className="network-name">+38097 000 0000</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn btn-default btn-lg"><i
                                            className="fa fa-instagram fa-fw"></i> <span
                                            className="network-name">Instagram</span></a>
                                    </li>
                                    <li>
                                        <a href="#" className="btn btn-default btn-lg"><i
                                            className="fa fa-facebook fa-fw"></i> <span
                                            className="network-name">Facebook</span></a>
                                    </li>
                                </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
)
}