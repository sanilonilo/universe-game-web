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

    public static async getStoreContent(){
        return axios.get(`${API_BASE_URL}/header-store-content`).then(response => response.data)
    }

    public static async getCommunityContent(){
        return axios.get(`${API_BASE_URL}/header-community-content`).then(response => response.data)
    }

    public static async getMoreContent(){
        return axios.get(`${API_BASE_URL}/header-more-content`).then(response => response.data)
    }

    public static getMenuNavContent(){
        return axios.get(`${API_BASE_URL}/header-menu-nav-content`).then(response => response.data)
    }

    public static getMicrosoftContent(){
        return axios.get(`${API_BASE_URL}/header-microsoft-content`).then(response => response.data)
    }

    public static getDynamicNavItemsContent(){
        return axios.get(`${API_BASE_URL}/header-dynamic-nav-items-content`).then(response => response.data)
    }
}

