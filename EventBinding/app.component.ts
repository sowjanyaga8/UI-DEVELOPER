import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eventBinding';

  months = ["jan","feb","mar","apr","jun","jul","aug","sep","oct","nov","dec"];
  isavailable=true;
  myClickFunction(event) {
    alert("button is clicked");
    console.log(event);
  }

  changeMonths(event) {
    alert("changed the month from dropdown");
  }
}
