import { Component } from '@angular/core';

import { SlackOAuthService } from './oauth/slack-oauth.service';

import { OAuth } from './oauth/oauth';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

    welcome = 'welcome';
}
