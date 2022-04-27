import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _helper : HelperService,
              private _router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this._helper.loggedInStatus = 'true';
    localStorage.setItem('login-status', 'true');
    this._router.navigate(['/home']);
  }

}
