import {Component, OnChanges, Input} from '@angular/core';

@Component({
    selector:'star-comp',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent{
    @Input() rating:number;
    starWidth:number;
    ngOnChanges():void{
        this.starWidth=this.rating*86/5
    }

}