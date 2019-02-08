import axios from 'axios';
import store from '@/store';


export function doFileUpload(data: FormData) {

    let tok = store.state.token;
    return axios.post('http://localhost:8090/datei/upload/v1',
        data,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': tok
            }
        }
    )
}

export function getFileList() {

    let tok = store.state.token;
    return axios.get('http://localhost:8090/datei/v1',
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'token': tok
            }
        }
    )}

    export function createFileLink(fileId: number) {

        let tok = store.state.token;
        return axios.post('http://localhost:8090/link/file/v1/' + fileId, {},
            {
                headers: {
                    'token': tok
                }
            }
        )
        }

        export function deletefile(fileId: number) {

            let tok = store.state.token;
            return axios.post('http://localhost:8090/datei/v1/'+fileId, {},
                {
                    headers: {
                        'token': tok
                    }
                }
            )}