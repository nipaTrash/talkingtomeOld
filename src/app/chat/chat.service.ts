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
        
    private _channels:any;
    private _groups:any;
    private _teamInfo:any;
    private _members:any;
    
    constructor (private http:Http, slackOAuthService:SlackOAuthService){
        this._slackOAuthService = slackOAuthService;
        
    }
    
    get OAuthData():OAuth {
        return this._slackOAuthService.OAuthData;
    }
    
    get OAuthAccessData():OAuthAccessData {
        return this._OAuthAccessData;
    }
    
    get channels():any {
        return this._channels;
    }
   
    get groups():any {
        return this._groups;
    }
    get teamInfo():any {
        return this._teamInfo;
    }
   
    get members():any {
        return this._members;
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
                err=>console.log(err),
                ()=>{this.getChatInfo();}
            );
        
    }
    
    
    $setOAuthAccessData(code:string){
        
        return this.http.get(this._OAuthAccessUrl+`&
                code=`+code)
            .map((res:any)=>res.json());
            
    }
    
    getChatInfo(){
        this.getChannels()
            .subscribe(data=>{
                this._channels = data;
            });
        this.getGroups()
            .subscribe(data=>{
                this._groups = data;
            });
        this.getTeamInfo()
            .subscribe(data=>{
                this._teamInfo = data;
            });
        this.getMembers()
            .subscribe(data=>{
                this._members = data;
            });
    }
    
    getChannels(){
        //temporal
        return this.http.get("assets/channelsTemp.json")
            .map((res:any)=>res.json());
    
        /*return this.http.get(`https://slack.com/api/channels.list?token=`+this._OAuthAccessData.access_token)
            .map((res:any)=>res.json());*/
    }
    
    getGroups (){
        return this.http.get(`https://slack.com/api/groups.list?token=`+this._OAuthAccessData.access_token)
            .map((res:any)=>res.json());
    }
    getTeamInfo (){
        return this.http.get("assets/teamInfoTemp.json")
            .map((res:any)=>res.json());
        /*return this.http.get(`https://slack.com/api/team.info?token=`+this._OAuthAccessData.access_token)
            .map((res:any)=>res.json());*/
    }
    getMembers (){
        return this.http.get("assets/membersTemp.json")
            .map((res:any)=>res.json());
        /*return this.http.get(`https://slack.com/api/users.list?token=`+this._OAuthAccessData.access_token)
            .map((res:any)=>res.json());*/
    }
    
    getNewMessages(utcFrom){
        
        return this.http.get('https://slack.com/api/conversations.history?token='+this._OAuthAccessData.access_token+'&oldest='+utcFrom+'&channel='+this.OAuthData.channel)
            .map((res:any)=>res.json());
        
    }  
    
    
    sendMessage(messageToSend){
        
        return this.http.get('https://slack.com/api/chat.postMessage?token='+this._OAuthAccessData.access_token+'&id=1&type=message&channel='+this.OAuthData.channel+'&text='+messageToSend)
            .toPromise();   
        
    }
    deleteMessage(message){
        return this.http.get('https://slack.com/api/chat.delete?token='+this._OAuthAccessData.access_token+'&channel='+this.OAuthData.channel+'&ts='+message.ts)
            .toPromise(); 
    }
   
}