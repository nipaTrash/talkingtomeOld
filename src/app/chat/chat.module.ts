import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SlackOAuthService } from '../oauth/slack-oauth.service';

import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';


import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';

import { MessagesModule } from './messages/messages.module';
import { MenuAsideModule } from './menu.aside/menu.aside.module';

import { TranslateModule } from '../translate/translate.module';

@NgModule({
    declarations:[ChatComponent],
    imports:[
        CommonModule,
        FormsModule,
        MdInputModule,
        MdCardModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MessagesModule,
        MenuAsideModule,
        TranslateModule
    ],
    providers:[ ChatService, SlackOAuthService],
    exports:[ChatComponent]
})
export class ChatModule{}