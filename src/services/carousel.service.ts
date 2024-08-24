import { HttpClient } from "./http-client";

export class CarouselService{
    public static getCarouselContent(){
        return HttpClient.get('/carousel-content')
    }
}