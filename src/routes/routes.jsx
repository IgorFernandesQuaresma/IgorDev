import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../components/navBar/NavBar";
import Sobre from "../pages/Sobre/Sobre";
import Card from "../components/cards/Card";
import Swipper from "../components/carrossel/Carrossel";
import Footer from "../components/footer/Footer"


function AppRoutes ( ) {
    return (
            
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/sobre" element={<Sobre/>} />
                        <Route path="/card" element={<Card/>} />
                        <Route path="/carrossel" element={<Swipper/>} />
                    </Routes>
                    <Footer/>
            </BrowserRouter>
    


    )
}


export default AppRoutes