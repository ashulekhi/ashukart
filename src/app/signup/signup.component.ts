import { Component } from "@angular/core";
import {HttpClient} from "@angular/common/http";
import * as $ from "jquery";

@Component({
    selector:'app-signup',
    templateUrl:'./signup.component.html',
    styleUrls:[]
})
export class SignupComponent{
    constructor(private http : HttpClient){
        $('document').ready(function() {
            $('#btn1').click()
          });
        // $('#examplemodal').on('shown.bs.modal', function () {
        //     $('#myInput').trigger('focus')
        //   })
      // console.log("...", $('#exampleModal') , document.getElementById('exampleModal'))
      
    }
user ={}
signup(){
   let url = "https://learningmeanwithashu.herokuapp.com/api/register"
   console.log("user details" , this.user); 
   this.http.post(url,this.user).subscribe((data)=>{
       console.log("data" , data);
   },(error)=>{
       console.log("error is", error);
   })
}
}