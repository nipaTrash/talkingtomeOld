import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { OAuthModule } from './oauth/oauth.module';
//import { SlackOAuthDirective } from './slack-oauth.directive';

import { AppComponent } from './app.component';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule,
    HttpModule,
    OAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
