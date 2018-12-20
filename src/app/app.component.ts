import { Component, Directive } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http : HttpClient){
    let url = "https://learningmeanwithashu.herokuapp.com/api/allproducts"
    this.http.get(url).subscribe((data)=>{
      console.log("this is the data" , data);
      this.products = data["data"];
    },(error)=>{
      console.log("error",error);
    })
  }
  products

  getProducts(){
    
  }



  showloginview =false;
  showsignupview = false;

showlogin(){
  this.showloginview = true;
  this.showsignupview = false;
}
showsignup(){
  this.showloginview = false;
  this.showsignupview = true;
}
}


