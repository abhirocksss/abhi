import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  getfliteredaccounts(fliterTerm: string) {
    throw new Error('Method not implemented.');
  }
  userdata=[];
  
  getuserdata()
  {
   return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }
  
  constructor(private httpClient:HttpClient) {


   }
   getaccounts():any
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals");
  }

  getfliteraccounts(fliterTerm:any):Observable<any>
  {
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals"+'?filter='+fliterTerm);
  }

}

