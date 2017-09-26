import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { OAuth } from './oauth';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SlackOAuthService{
    
    
    OAuthData:OAuth;
    OAuthAccessData;
    
    constructor (private http:Http){
        
        this.setOAuthData().subscribe(
            data=> {this.OAuthData = data;
                    console.log(this.OAuthData);
                   }, 
            error => console.log(error)
        );
    }
    
   
    setOAuthData(){
        return this.http.get("assets/OAuthData.json")
            .map((res:any)=>res.json());
    }
    
    getOAuthData(){
        return this.OAuthData;
    }

    getOAuthAccessData(){
        return this.OAuthAccessData;
    }
    
    OAuthAccessUrl = 'https://slack.com/api/oauth.access';
    
    setOAuthAccessData(code:string){

        return this.http.get(this.OAuthAccessUrl+`?
                client_id=`+this.OAuthData.client_id+`&
                client_secret=`+this.OAuthData.client_secret+`&
                code=`+code)
            .toPromise()
            .then(
                resp=> {
                    this.OAuthAccessData = resp.json(); 
                }
            );
    }
    
}

