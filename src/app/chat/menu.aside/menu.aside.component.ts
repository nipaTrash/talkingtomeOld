import { Component } from '@angular/core';

import { ChatService } from '../chat.service';

@Component({
    selector:'menu-aside',
    templateUrl:'./menu.aside.component.html',
    styleUrls:['./menu.aside.component.css']
})
export class MenuAsideComponent{
    
    private _chatService:ChatService;
    
    constructor (chatService:ChatService){
        this._chatService = chatService;
    }
    get channels():any {
        
        return this._chatService.channels;
        
    }
    get groups():any {
        
        return this._chatService.groups;
        
    }
    get teamInfo():any {
        
        return this._chatService.teamInfo;
        
    }
    get members():any {
        
        return this._chatService.members;
        
    }
}