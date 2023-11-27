import { Brand } from "../brand-list/brand";

export interface Car {
    brand:Brand;
    model:string;
    year:number;
    color:string;
    price:number;
    //image:string;
    //brand:number;
}