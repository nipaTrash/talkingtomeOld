import { Injectable }  from '@angular/core';
import { Http } from '@angular/http';

import { SlackOAuthService } from '../oauth/slack-oauth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService{
    
    OAuthData;
    OAuthAccessData;
    
    constructor (private http:Http, private slackOAuthService:SlackOAuthService){
        this.getOAuthAccessData();
        this.getOAuthData();
    }
    
    getOAuthData(){
        this.OAuthData = this.slackOAuthService.getOAuthData();
    }
    
    getOAuthAccessData(){
        this.OAuthAccessData = this.slackOAuthService.getOAuthAccessData();
    }
    
    sendMessage(messageToSend){
        
        return this.http.get('https://slack.com/api/chat.postMessage?token='+this.OAuthAccessData.access_token+'&id=1&type=message&channel='+this.OAuthData.channel+'&text='+messageToSend)
            .toPromise()
            .then((res:any)=>res.json());   
        
    }
    
}