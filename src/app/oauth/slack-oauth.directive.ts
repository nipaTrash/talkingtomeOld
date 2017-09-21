import { Directive, Input, HostBinding, HostListener } from '@angular/core';

import { SlackOAuthService } from './slack-oauth.service';

@Directive({
    selector:'[slack_oauth]'
})
export class SlackOAuthDirective{
    
    @Input() slack_oauth;
    
    @HostBinding() innerText='loguearse';
    
    code = '';
    //loginStatus = false;

    constructor (private slackOAuthService:SlackOAuthService){

        const hrefValue = window.location.href
        this.code = hrefValue.split('code=')[1];
        
        if (this.code) {
            this.code = this.code.split('&')[0];
            console.log(this.code);
        
        } 
            
        if (this.code!==''){
            this.getOAuth(this.code);
        }
     
    }
    
    getOAuth(code:string): void{
                
        this.slackOAuthService.getOAuth(this.code)
        //    .subscribe(res=>console.log(res));

    }
    
    /*@HostListener('click') onClick(){
        //console.log('boton para loguearse');
        this.slackOAuthService.login().subscribe(
            result=>console.log(result),
            err=>console.log('this is the error: '+err),
            ()=>console.log('complete')
        );
    }*/
}