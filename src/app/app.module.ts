import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'



import { AppComponent } from './app.component';
import { MyComponent } from './car.component';
import { ProductComponent } from './products/product.Component';
import { PipeUpper} from "./products/product-upper.pipe";
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HomeComponent } from './home/home.component';


import { NotFoundComponent } from './shared/notFound.component';
import { ProductDetail } from './products/product-detail.component';
import { OrderComponent } from './orders/order.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'products',
        component:ProductComponent
      },
      {
        path:'products/:id',
        component:ProductDetail
      },
      {
        path:'order',
        component:OrderComponent
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'',
       redirectTo:'home',
       pathMatch:'full' 
      },
      {
        path:'**',
        component:NotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
       MyComponent,
       ProductComponent,
      PipeUpper ,
      ProductFilter,
      StarComponent,
      HomeComponent,
      ProductDetail,
      OrderComponent,
      NotFoundComponent
  ],
  bootstrap: [AppComponent],
  providers:[ProductService]
})
export class AppModule{ 

}
