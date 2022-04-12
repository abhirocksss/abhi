import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { VehicleserviceService } from '../vehicleservice.service';

@Component({
  selector: 'app-vehicle-summary',
  templateUrl: './vehicle-summary.component.html',
  styleUrls: ['./vehicle-summary.component.scss']
})
export class VehicleSummaryComponent implements OnInit {
  abc:any=[]
  fliterTerm="";
  column="";
  order="";
  page="";
  limit="";

  constructor(private vehicleService:VehicleserviceService) {
    vehicleService.getData().subscribe(
      (abc:any) =>{
        this.abc=abc;
      }
    )
  }
  fliter()
  {
    this.vehicleService.getflitervehicles(this.fliterTerm).subscribe(
       (abc:any) =>{
        this.abc=abc;
      }

    )
  }


  sort()
  {
    this.vehicleService.getsortvehicles(this.column,this.order).subscribe(
      (abc:any) =>{
        this.abc=abc;
      }
    )
  }

  pull()
  {
    this.vehicleService.getpullvehicles(this.page,this.limit).subscribe(
      (abc:any)=>{
        this.abc=abc;
      }
    )
  }



  
  
   
  ngOnInit(): void {
  }

 
}

function sort() {
  throw new Error('Function not implemented.');
}

