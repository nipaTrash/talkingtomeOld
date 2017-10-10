import { Component, OnInit } from '@angular/core';
import { SignInService } from './signin.service';

import { NgModel } from '@angular/forms';

@Component({
    selector:'signin',
    templateUrl:'./signin.component.html',
    styleUrls:['./signin.component.css']
})
export class SignInComponent implements OnInit{

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