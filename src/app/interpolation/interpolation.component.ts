import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  name="abhilash";
  age= 25
  boolean=true;
  undefined=undefined;
  array=[1,2,3,4,5]
  object=null;
  balance=NaN;
  person={
    name:"vamd",
    age:20
  }
  dob="01-31-2018"






  constructor() { }

  ngOnInit(): void {
  }


}