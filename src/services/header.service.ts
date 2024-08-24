import { HttpClient } from "./http-client";

export class HeaderService{

    public static getGamePassContent(){
        return HttpClient.get('/header-game-pass-content')
    }

    public static async getGamesContent(){
        return HttpClient.get(`/header-games-content`)
    }

    public static async getDevicesContent(){
        return HttpClient.get(`/header-devices-content`)
    }

    public static async getStoreContent(){
        return HttpClient.get(`/header-store-content`)
    }

    public static async getCommunityContent(){
        return HttpClient.get(`/header-community-content`)
    }

    public static async getMoreContent(){
        return HttpClient.get(`/header-more-content`)
    }

    public static getMenuNavContent(){
        return HttpClient.get(`/header-menu-nav-content`)
    }

    public static getMicrosoftContent(){
        return HttpClient.get(`/header-microsoft-content`)
    }

    public static getDynamicNavItemsContent(){
        return HttpClient.get(`/header-dynamic-nav-items-content`)
    }
}

