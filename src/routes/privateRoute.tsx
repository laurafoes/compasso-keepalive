import { onAuthStateChanged } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { auth } from '../servcies/FirebaseConfig';

export const PrivateRoute = ({ children }: any) => {

    var signed;
    onAuthStateChanged(auth, currentUser => {
        if (currentUser) {
            signed = currentUser;
        } else { 
            signed = null;
        }
    })


    return signed !== null ? children : <Navigate to="/" />
}