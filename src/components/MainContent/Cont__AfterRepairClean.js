import {NavLink} from "react-router-dom";

export default function AfterRepairClean() {
    return (
        <div className="content-section-a">

            <div className="container">

                <div className="row">
                    <div className="col-lg-5 col-sm-6">
                        <hr className="section-heading-spacer"/>
                            <div className="clearfix"></div>
                            <h2 className="section-heading">Прибирання після ремонту</h2>
                            <p>- Видалення будівельної пилюки зі всіх поверхонь;</p>
                            <p>- Видалення залишків будівельних матеріалів зі всіх поверхонь;</p>
                            <p>- Вивіз будівельного сміття;</p>
                            <p>- Миття та поліровка вікон з відкосами;</p>
                            <p>- Прибирання лоджій та балконів.</p>
                            <div>
                                <p><NavLink to="/AfterRepairClean">Детальніше</NavLink></p>
                            </div>
                    </div>
                    <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                        <img className="img-responsive" src="img/Posle_remonta.jpg" alt=""/>
                    </div>
                </div>

            </div>

        </div>
    )
}