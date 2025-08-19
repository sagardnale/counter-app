import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Counter App';
  count = 0;

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }

  reset(){
    this.count=0;
  }
}
