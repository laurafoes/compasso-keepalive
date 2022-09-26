import { IUserInfo } from "../components/interfaces/UserInfo";

export function validar(user: IUserInfo) {
    let valorErro = '';
    const regex = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    const validaEmail = regex.test(user.email);
    const senha = user.password;
    if(senha.length < 6 || validaEmail === false){
        valorErro = 'Ops, usuário ou senha inválidos. Tente novamente!';
    } else {
        valorErro = '';
    }
    return valorErro;
}