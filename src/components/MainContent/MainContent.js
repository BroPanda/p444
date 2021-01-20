import Header from "../Header/Header";
import Cont__palning_clean from "./Cont__palning_clean";
import Cont__general_clean from "./Cont__general_clean";
import Cont__after_repair_clean from "./Cont__after_repair_clean";
import Banner from "./Banner";

export default function MainContent() {
    return (
        <div>
            <Header/>
            <Cont__palning_clean/>
            <Cont__general_clean/>
            <Cont__after_repair_clean/>
        </div>
    )
}