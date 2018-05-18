import axios from 'axios';

class Api {
    constructor() {
        this.baseUrl = '';
    }

    getUrl(path) {
        return this.baseUrl + path;
    }

    Get(path, params = {}) {
        const url = this.getUrl(path);
        return axios.get(url,params);
    }

    Post(path, params = {}){
        const url = this.getUrl(path);
        return axios({
            baseURL: url,
            withCredentials: false,
            method : 'post',
            data : params,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }
}

export default new Api();