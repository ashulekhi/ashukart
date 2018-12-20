import {Component} from "@angular/core"
import { CommonService } from "../commonservice";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../user.service";

@Component({
  selector:'login',
  templateUrl:'./login.component.html',
  styleUrls:[] 
})
export class LoginComponent{
    constructor(private userservice: UserService,private http : HttpClient, private router : Router){

    }
 email
 password
 errorMessage

 login(){
     let user = {
         email:this.email,
         password:this.password
     }
    let url = "https://learningmeanwithashu.herokuapp.com/api/login"
    this.http.post(url,user).subscribe((data)=>{
        console.log("data from login",data);
        if(data["token"]!=null){
            this.userservice.currentuser = data["name"];
            this.router.navigate(['signup']);
        }
        else{
          this.errorMessage=data["message"]
        }
        
    },(error)=>{
        this.errorMessage="Internal Server Error. Please try again."
        console.log("error from login api",error)
    })
 }
}