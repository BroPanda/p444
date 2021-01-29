import {NavLink} from "react-router-dom";

export default function Cont__GeneralСlean() {
    return (
        <div className="content-section-b">

            <div className="container">

                <div className="row">
                    <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                        <hr className="section-heading-spacer"/>
                            <div className="clearfix"></div>
                            <h2 className="section-heading">Генральне прибирання</h2>
                            <p>- Вологе приберання підлоги, стін, вікон;</p>
                            <p>- Видалення застрарілих плям любого походженя на всіх поверхнях;</p>
                            <p>- Мийка та дизінфекція санвузла;</p>
                            <p>- Очиска освітлювалювальних та опалювальних предметів;</p>
                            <p>- Прибирання лоджій та балконів.</p>
                            <div>
                                <p><NavLink to="/GeneralСlean">Детальніше</NavLink></p>
                            </div>
                    </div>
                    <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                        <img className="img-responsive" src="img/general_cleaning.jpg" alt=""/>
                    </div>
                </div>

            </div>

        </div>
    )
}