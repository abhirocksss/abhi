import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent
{
  name="abhi"
  num1=0;
  num2=0;
  sum()
  {
    alert(this.num1+this.num2);
  }
 

  
}
