import { Component } from '@angular/core';
import { HelperService } from './pages/services/helper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-spot';

  constructor(public _helper: HelperService) {
    this._helper.loggedInStatus = localStorage.getItem('login-status');
  }
}
