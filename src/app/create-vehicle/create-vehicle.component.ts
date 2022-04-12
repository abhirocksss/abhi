import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.scss']
})
export class CreateVehicleComponent implements OnInit {

  constructor() { }
  ids:any=[""];
  id="";
  vehicle="";
  manufacturer="";
  model="";
  type="";
  fuel="";
  color="";
  create(){
    var object:any={};
    object.id=this.id;
    object.vehicle=this.vehicle;
    object.manufacturer=this.manufacturer;
    object.model=this.model;
    object.type=this.type;
    object.fuel=this.fuel;
    object.color=this.color;
    this.ids.push(object);
  }
  
  
  

  ngOnInit(): void {
  }

}
