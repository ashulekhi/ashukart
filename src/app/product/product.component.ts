import { Component , Input} from "@angular/core";
import { CommonService } from "../commonservice";
@Component({
selector:'app-product',
templateUrl:'./product.component.html',
styleUrls:["./product.component.css"]
})
export class ProductComponent {
    constructor(private ashuref : CommonService){

    }
    @Input() product;
    user
    getUser(){
      this.user =this.ashuref.username;
    }

    
}

