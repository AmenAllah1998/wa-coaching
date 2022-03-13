import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wa-coaching';
  constructor(public location: Location) {
}
  isLogin() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
      if( titlee === '/login' || titlee === '/signup' || titlee.includes('/dashboard')  ) {
          return true;
      }
      else {
          return false;
      }
  }
}
