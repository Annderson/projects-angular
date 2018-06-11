import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'nav-manu',
  templateUrl: './nav-manu.component.html',
  styleUrls: ['./nav-manu.component.css']
})
export class NavManuComponent implements OnInit {

  constructor(private oauthService: OAuthService) { }

  login(){
    this.oauthService.initImplicitFlow();
  }
  logout(){
    this.oauthService.logOut();
  }

  get givenName(){

    let claims = this.oauthService.getIdentityClaims();
    if(!claims){
      return null;
    }
    return claims;
  }

  ngOnInit() {
  }

}
