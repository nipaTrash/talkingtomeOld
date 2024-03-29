import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdCardModule } from '@angular/material';

import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message.component';

import { MessagesService } from './messages.service';
import { UserService } from '../../user/user.service';


@NgModule({
    declarations:[ MessagesComponent, MessageComponent ],
    imports:[ CommonModule, MdCardModule ],
    providers:[ MessagesService, UserService ],
    entryComponents:[ MessageComponent ],
    exports:[ MessagesComponent, MessageComponent ]
})
export class MessagesModule{
    
}