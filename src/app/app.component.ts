import { Component } from '@angular/core';
import { AuthService } from './authorization/auth.service';
import { Store, select } from '@ngrx/store';
import { AppState, selectLogin } from './ngrx/state';
import { LogInUser } from './ngrx/actions/login.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLoggedIn = false;
  
  constructor(private _auth: AuthService, private store: Store<AppState>) {
    this.store.dispatch(new LogInUser());
   }

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
