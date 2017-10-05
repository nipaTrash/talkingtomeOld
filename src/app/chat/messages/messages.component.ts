import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef,ElementRef } from '@angular/core';

import { ChatService } from '../chat.service';
import { UserService } from '../../user/user.service';

import { UserInfo } from '../../user/user-info';

import { MessageComponent } from './message.component';
import { OAuthAccessData } from '../../oauth/oauth-access-data';


@Component({
    selector:'messages',
    templateUrl:'./messages.component.html',
    styleUrls:['./messages.component.css']
})
export class MessagesComponent implements OnInit{
    
    private _chatService:ChatService;
    private _userService:UserService;
    
    lastMessageUtc = 0;
    
    
    constructor (
        chatService:ChatService, 
        userService:UserService, 
        private resolver:ComponentFactoryResolver
        ){
            
        this._chatService = chatService;
        this._userService = userService;

    }
       
    get OAuthAccessData():OAuthAccessData {
        return this._chatService.OAuthAccessData;
    }
    
    ngOnInit(){

        setInterval(()=>{this.updateMessages()}, 1000)

    }
    

    updateMessages(){
        if (this.OAuthAccessData){ 

            this._chatService.getNewMessages(this.lastMessageUtc)
                .subscribe(
                    newMessages=>{
                        if (newMessages.ok){
                            
                            const sortMessages = newMessages.messages;
                            
                            sortMessages.sort(function(a,b){
                                return ((a.ts == b.ts) ? 0 : ((a.ts > b.ts) ? 1 : -1 ));
                            });
                            
                            sortMessages.forEach(message=>{this.writeNewMessage(message)});
                        }
                    },
                    err=>console.log('Problema al cargar nuevos mensajes: '+err) 
                )
        }  
        
                        
    }
    
    //Creamos un messageComponent por mensaje que se reciba
    @ViewChild ("newMessageContainer", {read:ViewContainerRef}) newMessageContainer;

    writeNewMessage(messageInfo){
        /*
            Sacamos el user de messageInfo y a partir de ahi pedimos informacion de usuario(getUserInfo)
            Una vez obenemos la informacion del usuario mostramos el mensaje
        */
        let userInfo;
        this._userService.getUserInfo(messageInfo.user)
            .subscribe(
                user=>{
                    if (user.profile){
                        userInfo = user.profile;
                    }
                },
                err=>console.log('Problema al excribir mensaje: '+err),
                ()=>{
                    const messageFactory = this.resolver.resolveComponentFactory(MessageComponent);
                    const messageRef = this.newMessageContainer.createComponent(messageFactory);
        
                    messageRef.instance.messageInfo = messageInfo;
                    messageRef.instance.userInfo = userInfo;
                }
            );
        
        if (this.lastMessageUtc < messageInfo.ts) this.lastMessageUtc = messageInfo.ts;
        
    }
    
    
}