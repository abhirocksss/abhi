import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})
export class AppsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  num1=0;
  num2=0;
  sum()
  {
    alert(this.num1+this.num2);
  }
  num3=0;
  num4=0;
  num5=0;
  area()
  {
    this.num5=(this.num3*this.num4);
  }
  names=[""];
  name="";
  register()
  {
    this.names.push(this.name)

  }
  users:any=[];
  product="";
  quantity="";
  price="";
  cart()
  {
    var obj:any={};
    obj.product=this.product;
    obj.quantity=this.quantity;
    obj.price=this.price;
    this.users.push(obj)

  }
  abc:any=[];
  sname="";
  email="";
  phone="";
  city="";
  signup()
  {
    var obj:any={};
    obj.sname=this.sname;
    obj.email=this.email;
    obj.phone=this.phone;
    obj.city=this.city;
    this.abc.push(obj)
  }
  isRed=true;
  change(){
    this.isRed=!this.isRed;
  }

  ishide=true;
  change1(){
    this.ishide=!this.ishide;
  }

  }

  
  


  




  


