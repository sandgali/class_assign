import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { MyComponent } from './car.component';
import { ProductComponent } from './products/product.Component';
import { PipeUpper} from "./products/product-upper.pipe";
import { ProductFilter } from './products/product-filter.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
       MyComponent,
       ProductComponent,
      PipeUpper ,
      ProductFilter,
      StarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule{ }
