import { Component, Input, HostBinding } from '@angular/core';
import { ChatService } from './chat.service';

import { SlackOAuthService } from '../oauth/slack-oauth.service';

@Component({
    selector:'chat',
    templateUrl:'./chat.component.html',
    styleUrls:['./chat.component.css']
})
export class ChatComponent{
     
    
    
    constructor (private chatService:ChatService, private slackOAuthService:SlackOAuthService){}
    
    @Input() display;
    
    @HostBinding('class.hide') get hide(){
        //return !this.slackOAuthService.OAuthOk;
        return false;//TEMPORAL (cambiar para que no se muestre el chat hasta que no haya token)
    }
    
    messageResult;
     
    sendMessage(messageToSend){
        
        this.messageResult = this.chatService.sendMessage(messageToSend);

    }
}