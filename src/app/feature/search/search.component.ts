import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, selectUser } from 'src/app/ngrx/state';
import { UserDetails } from 'src/app/models/user-details.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchPanelVisible: boolean = true;

  userDetails$: Observable<UserDetails>;
  userDetails: UserDetails;

  constructor(private store: Store<AppState>) {
    this.userDetails$ = this.store.select(selectUser);
   }

  ngOnInit(): void {  
    this.userDetails$.subscribe( userDetails => {
      this.userDetails = userDetails;
    });
  }

  openSearchPanel(){
    this.searchPanelVisible = true;
  }
 
  
}
