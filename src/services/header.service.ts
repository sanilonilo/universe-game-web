import axios from "axios";
import { API_BASE_URL } from "../env";

export class HeaderService{
    public static getGamePassContent(){
        return axios.get(`${API_BASE_URL}/header-game-pass-content`).then(response => response.data)
    }

    public static async getGamesContent(){
         return axios.get(`${API_BASE_URL}/header-games-content`).then(response => response.data)
    }

    public static async getDevicesContent(){
        return axios.get(`${API_BASE_URL}/header-devices-content`).then(response => response.data)
    }
}

