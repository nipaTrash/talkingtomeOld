import { Component, OnInit } from '@angular/core';
import { SignInService } from './signin.service';

@Component({
    selector:'signin',
    templateUrl:'./signin.component.html'
})
export class SignInComponent implements OnInit{
    
    private _signInService:SignInService;
    
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