import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './products/product'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  transform(productArray: Product[], args?: string): Product[] {
      var newArray = productArray.filter( (res)=>res.pname.startsWith(args) );

      for(var index=0;index<productArray.length;++index){
          productArray[index].newArray = newArray;
      }
      
      return newArray;
  }

}
