import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalize'
})
export class TranslatePipe implements PipeTransform{
    
    transform(value:string, args:string[]):any{        
        
        if(value){
            return value.charAt(0).toUpperCase() + value.slice(1);
        }

    }
}