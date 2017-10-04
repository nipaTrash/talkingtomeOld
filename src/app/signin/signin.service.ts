import { Injectable } from '@angular/core';
    
import { SlackOAuthService } from '../oauth/slack-oauth.service';



@Injectable()
export class SignInService{
    
    private _slackOAuthService:SlackOAuthService
    
    OAuthAuthoriseUrl: string;
    
    constructor (slackOAuthService:SlackOAuthService){
        this._slackOAuthService = slackOAuthService;
    }
    getOAuthData(){
        this._slackOAuthService.getOAuthData()
            .subscribe(
                data=> {
                    this._slackOAuthService.setOAuthData(data);

                    this.OAuthAuthoriseUrl = `https://slack.com/oauth/authorize?
                                                scope=identity.basic&
                                                client_id=`+data.client_id+`&
                                                redirect_uri=`+data.redirect_uri;
                },
                err=>console.log(err)
            );
    }

}
