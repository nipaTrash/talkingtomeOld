import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { Observable } from 'rxjs/Rx';


import { MdInputModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { SignInComponent } from './signin.component';
import { SignInService } from './signin.service';
import { SlackOAuthService } from '../oauth/slack-oauth.service';

describe('Component: SignInComponent',()=>{
    let component:SignInComponent;
    let fixture:ComponentFixture<SignInComponent>;
    let de:DebugElement;
    let htmlElement:HTMLElement;
    
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[   HttpModule,
                        MdInputModule,
                        BrowserAnimationsModule,
                        MdCardModule,
                        MdButtonModule,
                        FormsModule
                    ],
            declarations:[SignInComponent],
            providers:[SignInService, SlackOAuthService]
        }).compileComponents();
        
        fixture = TestBed.createComponent(SignInComponent);
        component = fixture.componentInstance;
        de = fixture.debugElement;
    });
    
    it('Should have Iniciar desde Slack title',()=>{
        //Arrange
        htmlElement = de.query(By.css('h1')).nativeElement;
    
        //Act
        
        //Assert
        expect(htmlElement.textContent).toEqual('Iniciar desde Slack');
    });
    
    it ('should be empty the initial input value',()=>{
        
        htmlElement = de.query(By.css('input')).nativeElement;
        
        expect (htmlElement.textContent).toEqual('');
    });
    
    
})