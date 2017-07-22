import { Component, OnInit } from '@angular/core';
import { Product } from "./product";
import { ProductdataService } from '../productdata.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  allProducs:Product[] = [
        new Product(100,"Moto g3",[])
      , new Product(200,"iPhone",[])
      , new Product(300,"samsung note",[])
  ];

  constructor(public _data:ProductdataService) {}

  ngOnInit() {

    this._data.getAllProducts().subscribe(
        (data:Product[]) => {
          this.allProducs = data
      }
    );
  }

  onDelete(item:Product){
      var foundAt=0;
      var originalFoundAt=0;
      var newArray = this.allProducs[0].newArray ;

      for( let index =0; index< newArray.length ; ++index){
          if( newArray[index].p_id == item.p_id ){
                foundAt   =  index;
          }
      }

      for( let index =0; index< this.allProducs.length ; ++index){
          if( this.allProducs[index].p_id == item.p_id ){
                originalFoundAt   =  index;
          }
      }

      //remove from original list
      this.allProducs.splice(  originalFoundAt , 1 );
      //remove from the filtered list
      newArray.splice(  foundAt , 1 );
  }


  /*onServerDelete(item:Product){
      this._data.deleteProduct(item).subscribe(

          (data:any)=>{
                this.allProducs.splice(  this.allProducs.indexOf(item) , 1 );
          }
      );
  }*/

}
