import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { ChatService } from '../chat/chat.service';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
     
    private _chatService:ChatService;
    
    constructor (private http:Http, private chatService:ChatService){
        this._chatService = chatService;
    }
    
    get OAuthAccessData(){
        return this._chatService.OAuthAccessData;
    }
    //token: string = '';

    getUserInfo(userId){
        
        return this.http.get('https://slack.com/api/users.profile.get?token='+this.OAuthAccessData.access_token+'&user='+userId)
            .map((res:any)=>{return res.json()});
        
    }
}
