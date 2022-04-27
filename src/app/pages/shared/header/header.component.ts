import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _helper: HelperService, private _router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this._helper.loggedInStatus = 'false';
    localStorage.setItem('login-status', 'false');
    this._router.navigate(['/login']);
  }

}
