import { Injectable }  from '@angular/core';
import { Http } from '@angular/http';

import { SlackOAuthService } from '../oauth/slack-oauth.service';
import { OAuth } from '../oauth/oauth';
import { OAuthAccessData } from '../oauth/oauth-access-data';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService{
    
    
    private _slackOAuthService:SlackOAuthService;
    
    private _OAuthAccessData:OAuthAccessData;
    
    private _OAuthAccessUrl:string;
        
    constructor (private http:Http, slackOAuthService:SlackOAuthService){
        this._slackOAuthService = slackOAuthService;
        
    }
    
    get OAuthData():OAuth {
        return this._slackOAuthService.OAuthData;
    }
    
    get OAuthAccessData():OAuthAccessData {
        return this._OAuthAccessData;
    }
   
    
    setOAuthAccessData(code:string):any{
        
        this._slackOAuthService.getOAuthData()
            .subscribe(
                data=> {
                    this._slackOAuthService.setOAuthData(data);
                    this._OAuthAccessUrl    = `https://slack.com/api/oauth.access?
                                                client_id=`+data.client_id+`&
                                                client_secret=`+data.client_secret;
                },
                error=>console.log(error),
                ()=>{this.getOAuthAccessDataFromCode(code)}
            );

    }
    getOAuthAccessDataFromCode(code){

        this.$setOAuthAccessData(code)
            .subscribe(
                data => {
                    this._OAuthAccessData = data;
                },
                err=>console.log(err)
            );
    }
    
    $setOAuthAccessData(code:string){
        
        return this.http.get(this._OAuthAccessUrl+`&
                code=`+code)
            .map((res:any)=>res.json());
            
    }
    
    getNewMessages(utcFrom){
        
        return this.http.get('https://slack.com/api/conversations.history?token='+this._OAuthAccessData.access_token+'&oldest='+utcFrom+'&channel='+this.OAuthData.channel)
            .map((res:any)=>res.json());
        
    }  
    
    
    sendMessage(messageToSend){
        
        return this.http.get('https://slack.com/api/chat.postMessage?token='+this._OAuthAccessData.access_token+'&id=1&type=message&channel='+this.OAuthData.channel+'&text='+messageToSend)
            .toPromise();   
        
    }
    
}