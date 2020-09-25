import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserDetails } from '../models/user-details.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  clientId = environment.clientId;
  clientSecret = environment.clientSecret;
  redirectUri = environment.redirectUri;
 
  constructor(private _http: HttpClient) { }
 
  retrieveToken() {
    let params = new URLSearchParams();   
    params.append('grant_type','client_credentials');
    params.append('client_id', this.clientId);
    params.append('client_secret', this.clientSecret);
    params.append('redirect_uri', this.redirectUri);
    let headers = 
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        'InterceptorSkipHeader': 'skip'});
    return this._http.post(environment.accessTokenUrl, 
      params.toString(), { headers: headers });
  }
 
  saveToken(tokenData): UserDetails {
    sessionStorage.setItem("access_token", tokenData.access_token);
    let userDetails: UserDetails = new UserDetails();
    userDetails.access_token = tokenData.access_token;
    userDetails.client_id = tokenData.client_id;
    userDetails.expires_in = tokenData.expires_in;
    userDetails.scope = tokenData.scope;
    userDetails.token_type = tokenData.token_type;
    userDetails.type = tokenData.type;
    userDetails.username = tokenData.username;
    return userDetails;
  }

  getToken(){
    return sessionStorage.getItem("access_token");
  }
   
  logout() {
    sessionStorage.clear();
    window.location.reload();
  }
}
