import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/add/operator/map';

@Injectable()
export class SlackOAuthService{
    
    
    constructor (private http:Http){}
    
    OAuth = {ok:false,access_token:'notoken'};
    
    OAuthToken:string = 'no token';
    OAuthOk = false;
    
    token: string = 'xoxp-242800904082-243689296838-244065043859-5bf833ff7491b01c167c5bf9c30a498as';
    channel: string = '';
        
    client_id = '';
    client_secret = '';

    
    oauthUrl = 'https://slack.com/api/oauth.access';
    
    

    getOAuth(code:string){
        return this.http.get(this.oauthUrl+'?client_id='+this.client_id+'&client_secret='+this.client_secret+'&code='+code)
            .toPromise()
            //.then(resp=>console.log(resp['_body'].access_token));
            .then(
                resp=> {
                    this.OAuth = resp.json(); 
                    this.OAuthOk = this.OAuth.ok;
                    this.OAuthToken = this.OAuth.access_token;
                    console.log(this.OAuthToken)
                }
            );
    }
    
}

