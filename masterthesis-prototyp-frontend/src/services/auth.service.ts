import axios from 'axios';
import store from '@/store';


export function doLogin(email:string, password: string) {

    return axios.post("http://localhost:8090/login/v1", {
        email: email,
        password: password
    });
}

export function doRegister(email: string, name:string , password: string) {

    return axios.post("http://localhost:8090/register/v1", {
        email: email,
        name: name,
        password: password
    })
}

export function doLogOut(token: string) {

    return axios.post("http://localhost:8090/logout/v1", {},
     { headers: {
        'token': token
     }
    }
    )
}