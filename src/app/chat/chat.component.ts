import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

import { Observable } from 'rxjs/Rx';

import { SlackOAuthService } from '../oauth/slack-oauth.service';
import { OAuth } from '../oauth/oauth';

import { NgModel } from '@angular/forms';

@Component({
    selector:'chat',
    templateUrl:'./chat.component.html',
    styleUrls:['./chat.component.css']
})
export class ChatComponent implements OnInit{

    
    private _slackOAuthService:SlackOAuthService;
    private _chatService:ChatService;
        
    private _code:string='';
    
    inputMessage: string;
        
    private _url = new URL(window.location.href);

    constructor (chatService:ChatService, slackOAuthService:SlackOAuthService){
        
        this._slackOAuthService = slackOAuthService;
        this._chatService = chatService;
        
    } 
    

    get OAuthData():OAuth {
        
        return this._slackOAuthService.OAuthData;
        
    }
    
    get channels():any {
        
        return this._chatService.channels;
        
    }

    ngOnInit(){

        this.getOAuthCodeFromUrl();
        this.setOAuthCode();   
     
    }
    
    getOAuthCodeFromUrl(){
                
        this._code = this._url.searchParams.get('code');
    
    }
    setOAuthCode(){
        if (this._code && this._code!==''){
            
            this._chatService.setOAuthAccessData(this._code);
            
        }
    }
    
    public onSend():void {

        const message = (<HTMLInputElement>document.getElementById("messageToSend")).value;

        this._sendMessage(message)
            .then(()=>this._cleanInput());
        
    }
    
    
    private _sendMessage(messageToSend){
        
        return this._chatService.sendMessage(messageToSend);
           
    }
    
    private _cleanInput():void {
        
        (<HTMLInputElement>document.getElementById("messageToSend")).value = "";
    }
    
    
}