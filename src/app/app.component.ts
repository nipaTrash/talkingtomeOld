import { Component } from '@angular/core';

import { SlackOAuthService } from './oauth/slack-oauth.service';

import { OAuth } from './oauth/oauth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    providers: [SlackOAuthService]
})
export class AppComponent{
    
    //OAuthData:OAuth;
    
    OAuthAuthoriseUrl;
    
    
    getOAuthUrl(){
        
        /*this.OAuthAuthoriseUrl= `https://slack.com/oauth/authorize?
                scope=identity.basic&
                client_id=`+this.OAuthData.client_id+`&
                redirect_uri=`+this.OAuthData.redirect_uri;*/
        
    }

}
