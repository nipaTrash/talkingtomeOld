import { Component } from '@angular/core';

import { SlackOAuthService } from './oauth/slack-oauth.service';

//import { ChatComponent } from './chat/chat.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
    constructor (private slackOAuthService:SlackOAuthService){}
    
    OAuthOk = this.slackOAuthService.OAuthOk;

}
