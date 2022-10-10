import { InitialPage } from "../pages/InitialPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { Register } from "../pages/Register";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { UserInfoProvider } from "../common/context/UserInfo";

export default function Router() {
    return(
        <BrowserRouter>
        <UserInfoProvider>
            <Routes>
                <Route path='/' element={<InitialPage />}>
                    <Route index element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Route>
                <Route path='/home' element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                } />
            </Routes>
        </UserInfoProvider>
      </BrowserRouter>
    )
}