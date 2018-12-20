import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule , Routes} from "@angular/router";


let routes : Routes  = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent}
]

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ProductComponent } from './product/product.component';
import { CommonService } from './commonservice';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';



@NgModule({
  declarations: [
    AppComponent,LoginComponent,SignupComponent,ProductComponent,NavbarComponent,HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [CommonService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
