import { UserInfoContext } from '../../common/context/UserInfo';
import { PropsUserContext } from '../interfaces/UserInfo';
import { NextButton } from './ButtonElements';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../servcies/FirebaseConfig';
import { useCreateUserWithEmailAndPassword, useSignInWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { browserSessionPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword } from 'firebase/auth';

export const Button = () => {
    const { userInfo, setError, errorExists, setErrorExists, loginPageTitle } = useContext<PropsUserContext>(UserInfoContext);
    const [updateProfile, updating, error] = useUpdateProfile(auth);
    const [confirmPW, setConfirmPW] = useState(false);
    const { registerPassword } = userInfo;
    const navigateTo = useNavigate();
    const { email } = userInfo;

    async function login() {

        setPersistence(auth, browserSessionPersistence)
            .then(async () => {
                try {
                    const { password } = userInfo;
                    const user = await signInWithEmailAndPassword(auth, email, password);
                    console.log(user)
                    setError('');
                    setErrorExists(false);
                    navigateTo('/home');
                } catch (err) {
                    setError('Ops, usuário ou senha inválidos. Tente novamente!');
                    setErrorExists(true);
                }
            })
    }

    async function register() {
        if (userInfo.password !== userInfo.confirmPassword) {
            setConfirmPW(false)
        }
        setPersistence(auth, browserSessionPersistence)
            .then(async () => {
                try {
                    const password = registerPassword;
                    const user = await createUserWithEmailAndPassword(auth, email, password);
                    console.log(user)
                    updateProfile({
                        displayName: userInfo.name
                    })
                    setError('');
                    setErrorExists(false);
                } catch (err) {
                    setErrorExists(true)
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
        //localStorage.setItem('user', JSON.stringify(currentUser));
        localStorage.setItem('user', JSON.stringify(currentUser));

    })

    return (
        <NextButton onClick={handleClick} errorExists={errorExists}>
            Continuar
        </NextButton>
    )
}