import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { OAuth } from './oauth';

import 'rxjs/add/operator/map';

@Injectable()
export class SlackOAuthService{
    
    private _OAuthData:OAuth;
    
    constructor (private http:Http){}

    
    get OAuthData():OAuth{
        
        return this._OAuthData;
    }

    
    //Se recogen los valores de OAuthData dese un json
    getOAuthData(){
        return this.http.get("assets/OAuthData.json")
            .map((res:any)=>res.json());
    }
    
    setOAuthData(data){
        this._OAuthData = data;
    }
    
}

