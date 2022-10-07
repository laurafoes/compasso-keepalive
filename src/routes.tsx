import { PaginaInicial } from "./pages/PaginaInicial";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

export default function Router() {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<PaginaInicial />}>
                <Route index element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Route>
            <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
}