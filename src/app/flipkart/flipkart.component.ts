import { APP_BASE_HREF } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.scss']
})
export class FlipkartComponent implements OnInit {
  abh: any=[];

  constructor(private flipkartService:FlipkartService) 
  {
    flipkartService.getData().subscribe(
      (data:any)=>{
        this.abh=this.abh;
      }


    )
   }

  ngOnInit(): void {
  }

}
