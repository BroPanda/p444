import './App.css';
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import MainContent from "./components/MainContent/MainContent";
import Banner from "./components/MainContent/Banner";
import {BrowserRouter, Route} from "react-router-dom";
import DryCleaner from "./components/DryCleaner/DryCleaner";
import PlaningClean from "./components/PlaningClean/PlaningClean";

function App() {
    return (
        <div className="App">
            <BrowserRouter>

            <Navigation/>

            <div className="mainContent">

                <Route exact path="/" component={MainContent}/>
                <Route exact path="/DryCleaner" component={DryCleaner}/>
                <Route exact path="/PlaningClean" component={PlaningClean}/>

            </div>
            <Banner/>
            <Footer/>

            </BrowserRouter>
        </div>
    );
}

export default App;
