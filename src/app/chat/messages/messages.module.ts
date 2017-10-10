import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdCardModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';

import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message.component';

import { ChatService } from '../chat.service';
import { UserService } from '../../user/user.service';


@NgModule({
    declarations:[ MessagesComponent, MessageComponent ],
    imports:[ CommonModule, MdCardModule, MdButtonModule ],
    providers:[ ChatService, UserService ],
    entryComponents:[ MessageComponent ],
    exports:[ MessagesComponent, MessageComponent ]
})
export class MessagesModule{
    
}