import{Injectable} from '@angular/core';
import { IProduct } from './product.model';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()

export class ProductService
{
    
    private _productUrl='https://ngapi4.herokuapp.com/api/getProducts';
    constructor(private _http:Http){

    }
   getProduct():Observable<IProduct[]>{
       return this._http.get(this._productUrl)
       .map((response)=><IProduct[]> response.json())
       .catch(this.handleError)
       
   }
   private handleError(error:Response)
   {
       return Observable.throw(error.json().error||"server error")
   }

}