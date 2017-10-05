import { Component, Input } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
    selector:'message',
    templateUrl:'./message.component.html',
    styleUrls:['./message.component.css']
})
export class MessageComponent{
    
    //@Input() messageInfo;
    //@Input() userInfo;
    
    private _chatService:ChatService;
    
    constructor(chatService:ChatService){
        this._chatService = chatService;
    }
    
    deleteMessage(message):void{
        this._chatService.deleteMessage(message)
            .then(()=>{
                document.getElementById(message.ts).remove();
            });
        
    }
   
}