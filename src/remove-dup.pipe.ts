import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash'; 
@Pipe({
  name: 'removeDup'
})
export class RemoveDupPipe implements PipeTransform{
  transform(value: any): any{
       if(value!== undefined && value!== null){
           return _.uniqBy(value, 'name');
       }
       return value;
   }
}