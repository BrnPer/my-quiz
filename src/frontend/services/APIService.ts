import axios, { AxiosInstance } from "axios";
class APIServiceClass {

    private url: string = (process.env.NODE_ENV === 'development') ? "https://localhost:7044/api" : "/api";
    private hubUrl: string = (process.env.NODE_ENV === 'development') ? "https://localhost:5001/notificationHub" : "/notificationHub";
    private token: string | null = null;
    private instance = axios.create();

    constructor() {

        this.instance.interceptors.response.use(function (response) {
            return response;
        }, function (error) {

            //Se chegar um pedido que tem o erro 401, fazemos logout e mandamos a pessoa para a página de login
            if (error.response.status === 401) {
                window.location.href = "/login";
            }

            return Promise.reject(error);
        });

    }

    GetURL(): string {
        return this.url;
    }

    SetToken(token: string | null) {
        this.token = token;
    }

    GetToken(): string {
        return this.token ?? "";
    }

    Axios(): AxiosInstance {
        return this.instance;
    }

    GetHubURL(): string {
        return this.hubUrl;
    }
}

export const APIService = new APIServiceClass();