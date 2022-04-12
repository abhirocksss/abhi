import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-acc',
  templateUrl: './create-acc.component.html',
  styleUrls: ['./create-acc.component.scss']
})
export class CreateAccComponent implements OnInit {

  constructor() { }
  number9:any=[""];
  name1="";
  email="";
  phone="";
  city="";
  signin()
  {
    var object:any={};
    object.name1=this.name1;
    object.email=this.email;
    object.phone=this.phone;
    object.city=this.city;
    this.number9.push(object);
  }

  ngOnInit(): void {
  }

}
