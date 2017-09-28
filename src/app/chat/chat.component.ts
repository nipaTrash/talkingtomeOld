import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

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
    
    constructor (chatService:ChatService, slackOAuthService:SlackOAuthService){
        
        this._slackOAuthService = slackOAuthService;
        this._chatService = chatService;
        
    } 
    
    get OAuthData():OAuth {
        
        return this._slackOAuthService.OAuthData;
        
    }

    ngOnInit(){

        //Sacamos el code del href
        const hrefValue = window.location.href;
        this._code = hrefValue.split('code=')[1];

        if (this._code) {
            
            this._code = this._code.split('&')[0];
        
        } 
            
        if (this._code && this._code!==''){
            
            this._chatService.setOAuthAccessData(this._code);
            
        }
     
    }
     
    sendMessage(){
        
        this._chatService.sendMessage(this.inputMessage)
            .then(
                ()=>this.inputMessage = ''
            );
        
    }
    
}