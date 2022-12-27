import axios from "axios";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
    'Accept-Language': 'it'
};

const injectToken = (config) => {
    try {
        const token = localStorage.getItem("auth");
        if (token != null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    } catch (error) {
        return config;
    }
};

class Http {
    instance = null;

    constructor() {
        return this.instance != null ? this.instance : this.initHttp();
    }

    initHttp() {

        const http = axios.create({
            baseURL: 'http://localhost:3001'|| 'http://localhost:8000',
            headers,
            withCredentials: true,
        });

        http.interceptors.request.use(
            (config) => injectToken(config), 
            (error) => Promise.reject(error)
        );

        http.interceptors.response.use(
            (response) => response,
            (error) => {
                const { response } = error;
                this.handleError(response);
                return Promise.reject(response);
            }
        );

        this.instance = http;
        return http;
    }

    request(config){
        return this.http.request(config);
    }
    get(url,config){
        return this.http.get(url, config);
    }
    post(url,data,config){
        return this.http.post(url, data, config);
    }
    put(url,data,config){
        return this.http.put(url, data, config);
    }
    patch(url,data,config){
        return this.http.patch(url, data, config);
    }
    delete(url, config){
        return this.http.delete(url, config);
    }

    handleError(error) {
        if (error) {
            const { status } = error;
            
            switch (status) {
                case 500: {
                    // Handle InternalServerError
                    break;
                }
                case 403: {
                    // Handle Forbidden
                    break;
                }
                case 401: {
                    // Handle Unauthorized
                    //handleSessionExpiration();
                    break;
                }
                case 429: {
                    // Handle TooManyRequests
                    break;
                }
                case 400: {
                    //User not found, Password not correct
                    break;
                }
            }
        }
    }
}

export const http = new Http();