import { Component, OnInit } from '@angular/core';
import { SignInService } from './signin.service';

import { NgModel } from '@angular/forms';

@Component({
    selector:'signin',
    templateUrl:'./signin.component.html',
    styleUrls:['./signin.component.css']
})
export class SignInComponent implements OnInit{

    
    public signinSlack: string = 'signin from slack';
    public yourTeam: string = 'your team';
    
    private _signInService:SignInService;
    
    inputTeam:string;
    
    constructor (signInService:SignInService){
        this._signInService = signInService;
    }
    
    get OAuthAuthoriseUrl():string{
        
        return this._signInService.OAuthAuthoriseUrl;
        
    }
    
    ngOnInit():any{
        
        this._signInService.getOAuthData();
    }
    
   
}