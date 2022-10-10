import { Navigate } from 'react-router-dom';
import { auth } from '../servcies/FirebaseConfig';

export const PrivateRoute = ({ children }: any) => {
    const signed = auth.currentUser;

    return signed !== null ? children : <Navigate to="/" />
}