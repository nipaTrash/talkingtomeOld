import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SlackOAuthService } from '../../oauth/slack-oauth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class MessagesService{
    

    constructor (private http:Http, private slackOAuthService:SlackOAuthService){}
   
    //Necesitamos coger el token que consigue slackOAuthService
    //token: string = this.slackOAuthService.OAuth.access_token;
    
    token: string = 'xoxp-242800904082-243689296838-244065043859-5bf833ff7491b01c167c5bf9c30a498as';
    channel: string = 'D74TNMLLD';

    getConversationHistory(){

        return this.http.get('https://slack.com/api/conversations.history?token='+this.token+'&channel='+this.channel)
            .map((res:any)=>res.json());
        
    }
    
    getNewMessages(utcFrom){
        
        return this.http.get('https://slack.com/api/conversations.history?token='+this.token+'&latest='+utcFrom+'&channel='+this.channel)
            .map((res:any)=>res.json());
        
    }
    
    
}