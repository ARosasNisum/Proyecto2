import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from '../components/login/LoginPage.tsx'
import HomePage from "../components/home/HomePage.tsx"

import '../assets/style.css'
import LayoutPubblico from "../components/template/LayoutPubblico.tsx";
import LayoutPrivato from "../components/template/LayoutPrivato.tsx";
import ListaUtentiPage from "../components/ListaUtenti/ListaUtentiPage.tsx";
import AppRouterPrivate from "./AppRouterPrivate.tsx";
import ProtettaPage from "../components/protetta/ProtettaPage.tsx";
import RegistrazionePage from "../components/registrazione/RegistrazionePage.tsx";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AppRouterPrivate/>}>
                    <Route path="secure" element={<LayoutPrivato/>}>
                        <Route index path={"listaUtenti"} element={<ListaUtentiPage/>}/>
                        <Route path={"protetta"} element={<ProtettaPage/>}/>
                    </Route>
                </Route>
                <Route path={"/"} element={<LayoutPubblico/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={"login"} element={<LoginPage/>}/>
                    <Route path={"registrazione"} element={<RegistrazionePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter