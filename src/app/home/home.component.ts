import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent{
    allproducts
    constructor(private http : HttpClient){
        let url = "https://learningmeanwithashu.herokuapp.com/api/allproducts"
        this.http.get(url).subscribe((response)=>{
           this.allproducts=response["data"]
        },
    (error)=>{

    })
    }
}