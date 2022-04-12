import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts:any=[]
  fliterTerm="";

  constructor(private accountsService:AccountsService) {
    accountsService.getuserdata().subscribe(
    (data:any)=>{
      this.accounts=data;
    }
    )
   }
   fliter()
   {
    this.accountsService.getfliteraccounts(this.fliterTerm).subscribe(
      (data:any) =>{
       this.accounts=data;
     }

   )
   }
  
  

  ngOnInit(): void {
  }

}
