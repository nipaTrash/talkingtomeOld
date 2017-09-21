import { Injectable }  from '@angular/core';
import { Http } from '@angular/http';

import { SlackOAuthService } from '../oauth/slack-oauth.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService{
    
    constructor (private http:Http, private slackOAuthService:SlackOAuthService){}
    
    pruebaDisplay = false;
    
    token: string = this.slackOAuthService.token;
    channel: string = this.slackOAuthService.channel;
    
    sendMessage(messageToSend){
        
        return this.http.get('https://slack.com/api/chat.postMessage?token='+this.token+'&id=1&type=message&channel='+this.channel+'&text='+messageToSend)
            .toPromise()
            .then((res:any)=>res.json());   
        
    }
    
}