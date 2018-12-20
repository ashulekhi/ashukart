import { Component } from "@angular/core";
import { UserService } from "../user.service";


@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:["./navbar.component.css"]
})
export class NavbarComponent{
    constructor(private userservice : UserService){

    }
    ngDoCheck(){
        this.loggedinuser = this.userservice.currentuser;
    }
    logout(){
        this.userservice.currentuser=null 
    }
  loggedinuser
}