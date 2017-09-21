import { Component } from '@angular/core';
import { ChatService } from './chat.service';

@Component({
    selector:'chat',
    templateUrl:'./chat.component.html',
    styles:[``]
})
export class ChatComponent{
     
    constructor (private chatService:ChatService){}
    
    
    messageResult;
     
    sendMessage(messageToSend){
        
        this.messageResult = this.chatService.sendMessage(messageToSend);

    }
}