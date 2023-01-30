import { InitialPage } from "../pages/InitialPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./privateRoute";
import { Home } from "../pages/Home";
import { UserInfoProvider } from "../common/context/UserInfo";

export default function Router() {
    return(
        <BrowserRouter>
        <UserInfoProvider>
            <Routes>
                <Route path='/' element={<InitialPage />} />
                <Route path='/register' element={<InitialPage />} />
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