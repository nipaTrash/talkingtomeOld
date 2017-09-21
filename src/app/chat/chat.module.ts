import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';

import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';

import { MessagesModule } from './messages/messages.module';



@NgModule({
    declarations:[ChatComponent],
    imports:[
        CommonModule,
        MdInputModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MessagesModule
    ],
    providers:[ChatService],
    exports:[ChatComponent]
})
export class ChatModule{}