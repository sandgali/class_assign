import {Component} from '@angular/core';

@Component({
  selector: 'car-comp',
  template: `<h1> this is car page</h1>`

})

export class MyComponent{


    private newMethod(): string {
        return 'car-comp';
    }
}