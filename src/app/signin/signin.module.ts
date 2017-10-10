import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SlackOAuthService } from '../oauth/slack-oauth.service';

import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';

import { SignInComponent } from './signin.component';
import { SignInService } from './signin.service';

@NgModule({
    declarations:[ SignInComponent],
    imports:[ 
        CommonModule,
        MdInputModule,
        BrowserAnimationsModule,
        MdCardModule,
        MdButtonModule,
        FormsModule
    ],
    providers:[ SignInService, SlackOAuthService ],
    exports:[ SignInComponent ]
})
export class SignInModule{ }