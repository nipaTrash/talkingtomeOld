import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
    selector:'chat',
    templateUrl:'./chat.component.html',
    styles:[``]
})
export class ChatComponent{
     
    constructor (private _chatService:ChatService){}
    
    messageResult;
    
    
    
    sendMessage(messageToSend){
        
        this.messageResult = this._chatService.sendMessage(messageToSend);

    }
}