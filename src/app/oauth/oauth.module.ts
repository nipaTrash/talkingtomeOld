import { NgModule } from '@angular/core';

import { SlackOAuthDirective } from './slack-oauth.directive';
import { SlackOAuthService } from './slack-oauth.service';

@NgModule({
    declarations:[SlackOAuthDirective],
    providers:[SlackOAuthService],
    exports:[SlackOAuthDirective]
})
export class OAuthModule{
    
}