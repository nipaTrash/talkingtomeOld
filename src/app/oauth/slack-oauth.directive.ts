import { Directive, Input, HostBinding, HostListener } from '@angular/core';

import { SlackOAuthService } from './slack-oauth.service';

@Directive({
    selector:'[slack_oauth]'
})
export class SlackOAuthDirective{
    
    @Input() slack_oauth;
    
    @HostBinding() innerText='loguearse';
    
    constructor (private _slackOAuthService:SlackOAuthService){}
    
    @HostListener('click') onClick(){
        //console.log('boton para loguearse');
        this._slackOAuthService.login().subscribe(
            result=>console.log(result),
            err=>console.log('this is the error: '+err),
            ()=>console.log('complete')
        );
    }
}