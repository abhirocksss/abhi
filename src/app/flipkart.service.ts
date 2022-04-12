import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartService {
  abh: any=[];
  Httpclient: any;
  getData():Observable<any>
  {
    return this.Httpclient.get("https://fakestoreapi.com/products")
  };

  constructor() { }
}
