import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil/Accueil";
import Header from "./layouts/Header/Header";
import Footer from "./layouts/Footer/Footer";
import APropos from "./pages/A-propos/APropos";
import Fiche from './pages/Fiche-logement/Fiche';
import Erreur404 from "./pages/404/404";


function App() {

    return(
        
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Header></Header>
                <Routes>
                    <Route path="/" element={<Accueil />}/>
                    <Route path="/a-propos" element={<APropos />}/>
                    <Route path="/logement/:id" element={<Fiche />}/>
                    <Route path="*" element={<Erreur404 />}/>
                </Routes>
            <Footer></Footer>
        </BrowserRouter>
        
    );


}

export default App;
