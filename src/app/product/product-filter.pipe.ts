import { Pipe, PipeTransform } from '@angular/core';
import { ProductsInter } from './products-inter';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: ProductsInter[],args: string): ProductsInter[]{
    let filter:string=args?args.toLocaleLowerCase():"";

    return filter? value.filter((product:ProductsInter)=>
      product.Marca.toLocaleLowerCase().indexOf(filter)!=-1
  ):value;
  }

}
