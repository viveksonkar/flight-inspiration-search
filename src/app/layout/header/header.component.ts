import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectLogin } from 'src/app/ngrx/state';
import { AuthService } from 'src/app/authorization/auth.service';
import { LogInUser } from 'src/app/ngrx/actions/login.action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private _auth: AuthService, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select(selectLogin)).subscribe( isLogged => {
      this.isLoggedIn = isLogged;
    });
  }

  login(){
    this.store.dispatch(new LogInUser());
  }
 
  logout() {
    this._auth.logout();
  }

}
