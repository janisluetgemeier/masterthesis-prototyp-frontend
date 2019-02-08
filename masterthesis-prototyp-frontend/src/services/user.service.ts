import axios from 'axios';
import store from '@/store';
export function getAllUser() {

    let tok = store.state.token;
    return axios.get('http://localhost:8090/user/v1',
        {
            headers: {
                'token': tok
            }
        }
    )}

    export function deleteUser(userId: number) {

        let tok = store.state.token;
        return axios.post('http://localhost:8090/user/v1/' + userId, {},
            {
                headers: {
                    'token': tok
                }
            }
        )}