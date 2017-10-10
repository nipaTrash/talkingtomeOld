import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ChatComponent } from './chat.component';
import { ChatService } from './chat.service';
import { SlackOAuthService } from '../oauth/slack-oauth.service';
import { MessagesModule } from './messages/messages.module';

import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';


describe('Component: ChatComponent',()=>{
    let component:ChatComponent;
    let fixture:ComponentFixture<ChatComponent>;
    let de:DebugElement;
    let htmlElement:HTMLElement;
    
    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[ChatComponent],
            imports:[   HttpModule,
                        FormsModule,
                        MessagesModule,
                        MdInputModule,
                        MdCardModule,
                        BrowserAnimationsModule,
                        MdButtonModule 
                    ],
            providers:[ChatService, SlackOAuthService]
        }).compileComponents();
        
        fixture = TestBed.createComponent(ChatComponent);
        component = fixture.componentInstance;
    
        fixture.detectChanges();

        de = fixture.debugElement;
        

    });
    
    it('should be empty the input to write new message',()=>{
        //Arrange
        htmlElement = de.query(By.css('#textarea')).nativeElement;
        //Act
        //Assert
        expect(htmlElement.textContent).toEqual('');
    });
    
})