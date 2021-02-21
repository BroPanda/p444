import './App.css';
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";
import Banner from "./components/MainContent/Banner";
import {BrowserRouter, Route} from "react-router-dom";
import DryCleaner from "./components/DryCleaner/DryCleaner";
import PlaningClean from "./components/PlaningClean/PlaningClean";
import AfterRepairClean from "./components/After_repair_clean/AfterRepairClean";
import GeneralСlean from "./components/GeneralСleaning/GeneralСlean";
import CallMeWindow from "./components/CallMeWindow/CallMeWindow";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navigation/>
                <div className="mainContent">
                    <Route exact path="/" component={MainContent}/>
                    <Route exact path="/DryCleaner" component={CallMeWindow}/>
                    <Route exact path="/PlaningClean" component={PlaningClean}/>
                    <Route exact path="/AfterRepairClean" component={AfterRepairClean}/>
                    <Route exact path="/GeneralСlean" component={CallMeWindow}/>
                </div>
                <Banner/>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
