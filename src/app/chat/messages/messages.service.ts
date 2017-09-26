import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SlackOAuthService } from '../../oauth/slack-oauth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class MessagesService{
    
    OAuthData;
    OAuthAccessData;
    
    constructor (private http:Http, private slackOAuthService:SlackOAuthService){
        this.getOAuthData();
        this.getOAuthAccessData();
    }

    getOAuthData(){
        this.OAuthData = this.slackOAuthService.getOAuthData();
    }
    
    getOAuthAccessData(){
        this.OAuthAccessData = this.slackOAuthService.getOAuthAccessData();
    }
    
    getConversationHistory(){

        this.OAuthAccessData = this.slackOAuthService.getOAuthAccessData();
        
        return this.http.get('https://slack.com/api/conversations.history?token='+this.OAuthAccessData.access_token+'&channel='+this.OAuthData.channel)
            .map((res:any)=>res.json());
        
    }
    
    getNewMessages(utcFrom){
        
        return this.http.get('https://slack.com/api/conversations.history?token='+this.OAuthAccessData.access_token+'&latest='+utcFrom+'&channel='+this.OAuthData.channel)
            .map((res:any)=>res.json());
        
    }  
}