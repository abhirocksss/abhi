import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleserviceService {


  abc: any=[];
  order:any="";
  column:any="";
  fliterterm:any="";
  page:any="";
  limit:any="";

  getData():Observable<any>
  {
    return this.HttpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  };

  constructor(private HttpClient:HttpClient) {

  };
  getvehicles():Observable<any>
  {
    return this.HttpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction");
  }
  getflitervehicles(fliterTerm:any):Observable<any>
  {
    return this.HttpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?filter='+fliterTerm)
  }
  
  getsortvehicles(order:any,column:any):Observable<any>
  {
    return this.HttpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?sortBy='+column+'&order='+order)

  };

  getpullvehicles(page:any,limit:any):Observable<any>
  {
    return this.HttpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction"+'?page='+page+'&limit='+limit)

  }


}