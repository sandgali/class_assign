import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:"nameUpper"

})
export class PipeUpper implements PipeTransform{
    transform(value:string):string{
        if(value.length>0){
            value= value.toUpperCase()
        }
        return value;
    }

}