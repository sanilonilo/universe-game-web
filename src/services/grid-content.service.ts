import { HttpClient } from "./http-client";

export class GridContentService{
    public static getGridContent(){
        return HttpClient.get('/grid-content')
    }
}