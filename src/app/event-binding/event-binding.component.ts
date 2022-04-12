import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  test1()
  {
   alert("click");
  }
  test2()
  {
    alert("dblclick");
  }
  test3()
  {
    alert("keypress");
  }
  test4()
  {
    alert("keyup");
  }
  test5()
  {
    alert("keydown");
  }
  test6()
  {
    alert("focus");
  }
  test7()
  {
    alert("mouseenter");
  }


}
