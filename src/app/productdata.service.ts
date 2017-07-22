import { Injectable } from '@angular/core';
import { Http,Response,Headers,RequestOptions  } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class ProductdataService {
    constructor(public _http:Http) { }
    url:string="https://rkdemotask.herokuapp.com/Products"

    getAllProducts(){
        return this._http.get(this.url).map( (res:any) => res.json() );
    }

    deleteProduct(item){
        let headers = new Headers({'Content-Type':'application/json'});
        let reqOptions = new RequestOptions({"headers":headers});
        return this._http.delete(this.url+item.p_id,reqOptions).map((res:Response)=>res.json);
    }
}
