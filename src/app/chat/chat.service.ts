import { Injectable }  from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChatService{
    
    
    newMessageTemp = [
        
        {"text": "nuevo msg", "username": "talkingtome", "bot_id": "B762P5BL6", "type": "message", "subtype": "bot_message", "ts": "1505813915.000025"},
        
        {"type": "message", "user": "U75L98QQN", "text": "tal", "ts": "1505804664.000019" }
        
    ]
    
    constructor (private _http:Http){}
    
    //token: string = 'xoxp-242800904082-243689296838-243342828245-40f450b3381f2c87fa68f2a1adae816b';
    token: string = 'xoxp-242800904082-243689296838-244939044631-0d9fa179c2d328c19c3e26cdc2481560';
    channel: string = 'D74TNMLLD';
    
    sendMessage(messageToSend){
        //return 'sendMessagePrueba';//TEMPORAL
        
        return this._http.get('https://slack.com/api/chat.postMessage?token='+this.token+'&id=1&type=message&channel='+this.channel+'&text='+messageToSend)
            .toPromise()
            .then((res:any)=>res.json());
        
    }
    
    getConversationHistory(){

        return this._http.get('https://slack.com/api/conversations.history?token='+this.token+'&channel='+this.channel)
            .map((res:any)=>res.json());
        
    }
    
    getNewMessages(utcFrom){
        
        return this._http.get('https://slack.com/api/conversations.history?token='+this.token+'&latest='+utcFrom+'&channel='+this.channel)
            .map((res:any)=>res.json());
        //return this.newMessageTemp;//TEMPORAL
        
    }
    
    getUserInfo(userId){
        
        return this._http.get('https://slack.com/api/users.profile.get?token='+this.token+'&user='+userId)
            .map((res:any)=>{return res.json()});
        
    }
}