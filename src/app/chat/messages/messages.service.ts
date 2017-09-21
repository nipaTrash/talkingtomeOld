import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SlackOAuthService } from '../../oauth/slack-oauth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class MessagesService{
    
  
    constructor (private http:Http, private slackOAuthService:SlackOAuthService){}

    //token: string = this.slackOAuthService.token;
    //channel: string = this.slackOAuthService.channel;

   // token: string = this.slackOAuthService.OAuth['access_token']? this.slackOAuthService.OAuth['access_token'] : false;
    token: string = this.slackOAuthService.token;
    
    channel: string = this.slackOAuthService.channel;

    getConversationHistory(){

        return this.http.get('https://slack.com/api/conversations.history?token='+this.token+'&channel='+this.channel)
            .map((res:any)=>res.json());
        
    }
    
    getNewMessages(utcFrom){
        
        return this.http.get('https://slack.com/api/conversations.history?token='+this.token+'&latest='+utcFrom+'&channel='+this.channel)
            .map((res:any)=>res.json());
        
    }
    
    
}