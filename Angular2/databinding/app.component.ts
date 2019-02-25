import { Component } from '@angular/core';

@Component ({
   selector: 'my-app',
   templateUrl: 'app/app.component.html'
})

export class AppComponent {
   appTitle: string = 'Welcome';
   appList: any[] = [ {
      "ID": "1",
      "url": 'app/Images/One.jpg'
   },

   {
      "ID": "2",
      "url": 'app/Images/Two.jpg'
   } ];
}
