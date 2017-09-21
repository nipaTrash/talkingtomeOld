import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SlackOAuthService{
    
    
    constructor (private _http:Http){}
    
    scope = 'chat%3Awrite%3Abot+chat%3Awrite%3Auser+groups%3Ahistory+im%3Ahistory+mpim%3Ahistory+users%3Aprofile%3Aread';
    client_id = '';
    client_secret = '';
    loginUrl = 'https://slack.com/oauth/authorize?client_id='+this.client_id+'&scope='+this.scope+'&team=T74PJSL2E';
    login(){
        //console.log('login desde service');
        //this._http.get('https://slack.com/oauth/authorize?client_id='+this.client_id+'&client_secret='+this.client_secret)
       // return this._http.get('https://slack.com/oauth/authorize?client_id='+this.client_id+'&scope='+this.scope+'&team=T74PJSL2E');
        //return this._http.get('https://slack.com/api/auth.test?token=xoxp-242800904082-243689296838-243230566032-bb040de69d0675ace498d1198407668e&pretty=1');
        
        
        const headerDict = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
        }

        const headerObj = new Headers(headerDict);                                                                                           

        return this._http.get(this.loginUrl, headerObj)
    }
}
