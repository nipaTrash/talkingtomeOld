import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { MdCardModule } from '@angular/material';

import { ChatComponent } from './chat.component';
import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message.component';

import { ChatService } from './chat.service';


@NgModule({
    declarations:[ChatComponent,MessagesComponent,MessageComponent],
    imports:[
        CommonModule,
        MdInputModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdCardModule
    ],
    providers:[ChatService],
    entryComponents:[MessageComponent],
    exports:[ChatComponent,MessagesComponent,MessageComponent]
})
export class ChatModule{}