import {Component} from '@angular/core'
import {IProduct} from './product.model'
import {ProductService} from './product.service'

@Component({

    selector: 'prod-comp',
    templateUrl:'./product.component.html',
    styleUrls:['./product.component.css']
})

export class ProductComponent
{
    Image: any;
    title:string="****product list****";
    showTable:any;
    showList:any;
    //Selection:boolean=true;
    Grid:boolean=true;
    List:boolean=true;
    filterProduct="";
    imageWidth=50;
    errorMessage;
    products:IProduct[]
    constructor(private _productService:ProductService){
    }
    toggleImage():void{
        this.Image=!this.Image;
    }
    toggleGrid():void{
        this.showTable=!this.showList;
       
   }
    toggleList():void{
       this.showList=!this.showTable;
        
    }
    ngOnInit():void{
this._productService.getProduct()
.subscribe((data)=>this.products =data,
(err) => this.errorMessage)
    }
    }
