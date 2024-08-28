import { HttpClient } from "./http-client";

export class IconBarService{
    public static getIconBarContent(){
        return HttpClient.get('/icons-bar-content')
    }
}