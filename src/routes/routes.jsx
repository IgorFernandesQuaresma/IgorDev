import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NavBar from "../components/navBar/NavBar";
import Sobre from "../pages/Sobre/Sobre";
import Footer from "../components/footer/Footer"
import Servicos from "../pages/Servicos/Servicos";


function AppRoutes ( ) {
    return (
            
            <BrowserRouter>
                <NavBar/>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/sobre" element={<Sobre/>} />
                        <Route path="/servicos" element={<Servicos/>} />
                        
                    </Routes>
                    <Footer/>
            </BrowserRouter>
    


    )
}


export default AppRoutes