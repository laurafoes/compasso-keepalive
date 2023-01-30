import { UserInfoContext } from '../../common/context/UserInfo';
import { PropsUserContext } from '../interfaces/UserInfo';
import { NextButton } from './ButtonElements';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../services/FirebaseConfig';
import { useUpdateProfile } from "react-firebase-hooks/auth";
import { browserSessionPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';

export const Button = () => {
    const { 
        userInfo,
        setError,
        errorExists,
        setErrorExists,
        setIcons,
        loginPageTitle,
        setRegistered,
        setLogged
    } = useContext<PropsUserContext>(UserInfoContext);

    const [ updateProfile ] = useUpdateProfile(auth);
    const { registerPassword } = userInfo;
    const navigateTo = useNavigate();
    const { email } = userInfo;

    async function login() {
        setPersistence(auth, browserSessionPersistence)
        .then(async () => {
            try {
                const { password } = userInfo;
                await signInWithEmailAndPassword(auth, email, password);
                setLogged(true);
                setError('');
                setErrorExists(false);
                setTimeout(() => {
                    navigateTo('/home')
                    }, 3000)
            } catch (err) {
                setError('Ops, usuário ou senha inválidos. Tente novamente!');
                setErrorExists(true);
            }
        })
    }

    async function register() {
        setPersistence(auth, browserSessionPersistence)
        .then(async () => {
            try {
                const password = registerPassword;
                await createUserWithEmailAndPassword(auth, email, password);
                updateProfile({
                    displayName: userInfo.name
                })
                setError('');
                setErrorExists(false);
                setRegistered(true);
                setTimeout(() => {
                navigateTo('/')
                }, 3000)
            } catch (err) {
                setErrorExists(true);
            }
        })
    }

    const handleClick = () => {
        if (loginPageTitle === 'Login') {
            login();
        } else {
            register();
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
        localStorage.setItem('user', JSON.stringify(currentUser));
    })

    return (
        <NextButton onClick={handleClick} errorExists={errorExists}>
            Continuar
        </NextButton>
    )
}