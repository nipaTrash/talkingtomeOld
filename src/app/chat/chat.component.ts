import { Component, OnInit, AfterViewInit } from '@angular/core';
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
export class ChatComponent implements OnInit, AfterViewInit{

    
    private _slackOAuthService:SlackOAuthService;
    private _chatService:ChatService;
        
    private _code:string='';
    
    inputMessage: string;
        
    constructor (chatService:ChatService, slackOAuthService:SlackOAuthService){
        
        this._slackOAuthService = slackOAuthService;
        this._chatService = chatService;
        
    } 
    
    //channels = this._chatService.channels;

    get OAuthData():OAuth {
        
        return this._slackOAuthService.OAuthData;
        
    }
    
    get channels():any {
        
        return this._chatService.channels;
        
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
    
    ngAfterViewInit(){
        /*const sendButton = document.querySelector('#sendBtn');
        const send$ = Observable.fromEvent(sendButton,'click');
        const interval$ = Observable.interval(1000);
        
        
        send$ = this.http.get('https://slack.com/api/chat.postMessage?token='+this.OAuthAccessData.access_token+'&id=1&type=message&channel='+this.OAuthData.channel+'&text='+messageToSend)
            .toPromise(); 
            
        send$
            .switchMap(()=>interval$)
            .subscribe((x)=>console.log(x));*/
    }
    
    
    
    sendMessage(){
        
        this._chatService.sendMessage(this.inputMessage)
            .then(
                ()=>this.inputMessage = ''
            );
        
    }
    
    
}