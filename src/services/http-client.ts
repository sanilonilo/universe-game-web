import axios from "axios";
import { API_BASE_URL } from "../env";

export class HttpClient{

    public static BaseUrl: string = API_BASE_URL;

    public static get(endpont: string ){
        return axios.get(`${HttpClient.BaseUrl}${endpont}`).then(response => response.data)
    }
}