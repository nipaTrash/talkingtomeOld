import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { SlackOAuthService } from '../oauth/slack-oauth.service';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService{
     
    constructor (private http:Http, private slackOAuthService:SlackOAuthService){}
    
    
    token: string = '';

    getUserInfo(userId){
        
        return this.http.get('https://slack.com/api/users.profile.get?token='+this.token+'&user='+userId)
            .map((res:any)=>{return res.json()});
        
    }
}
