import React, {useEffect, useState} from "react";
import CallMeWindow from "../CallMeWindow/CallMeWindow";

export default function Header() {


    const CallMe = () => {
        fetch(`https://api.telegram.org/bot1606712611:AAGUZT30m9uPSt_Foknd0Zi6ZOc9-0G35fM/sendMessage?chat_id=522928013&text=asda`);

    }
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
                                    <button className="btn btn-default btn-lg"
                                            data-toggle="modal"
                                            data-target="#exampleModal">

                                        <i className="fa fa-phone fa-fw"></i>
                                        <span className="network-name"> Замовити консультацію</span>
                                    </button>
                                </li>
                            </ul>
                            <CallMeWindow/>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

// https://api.telegram.org/bot1606712611:AAGUZT30m9uPSt_Foknd0Zi6ZOc9-0G35fM/getUpdates

// https://api.telegram.org/bot1606712611:AAGUZT30m9uPSt_Foknd0Zi6ZOc9-0G35fM/sendMessage?chat_id=522928013&text=hi