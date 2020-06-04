import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PV Clinical';
    onSubmit(){
      alert("tell me this works!")
      return "HELLO USER"
    }
}
