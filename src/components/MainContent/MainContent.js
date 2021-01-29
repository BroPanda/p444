import Header from "../Header/Header";
import Cont__palning_clean from "./Cont__palning_clean";
import Cont__general_clean from "./Cont__general_clean";
import Cont__AfterRepairClean from "./Cont__AfterRepairClean";

export default function MainContent() {
    return (
        <div>
            <Header/>
            <Cont__palning_clean/>
            <Cont__general_clean/>
            <Cont__AfterRepairClean/>
        </div>
    )
}