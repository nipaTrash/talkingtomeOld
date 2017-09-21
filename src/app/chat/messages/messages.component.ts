import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { MessagesService } from './messages.service';
import { UserService } from '../../user/user.service';

import { UserInfo } from '../../user/user-info';

import { MessageComponent } from './message.component';

import 'rxjs/add/operator/map';

@Component({
    selector:'messages',
    templateUrl:'./messages.component.html',
    styleUrls:['./messages.component.css']
})
export class MessagesComponent implements OnInit{
    
 
    constructor (
        private messagesService:MessagesService, 
        private userService:UserService, 
        private resolver:ComponentFactoryResolver
        ){
        
        setInterval(()=>{this.updateMessages()}, 1000)

    }
  
    
    ngOnInit(){

        this.messagesService.getConversationHistory()
            .subscribe(
                messages=>{
                    if (messages.ok){
                        messages.messages.forEach(message=>{this.writeNewMessage(message)})  
                    }
                },
                err=>console.log('Problema al cargar historial: ' +err)
            )
    }
    
    lastMessageUtc = 0;

    updateMessages(){
        
        //const newMessages = this.messagesService.getNewMessages(this.lastMessageUtc);
        
        this.messagesService.getNewMessages(this.lastMessageUtc)
            .subscribe(
                newMessages=>{
                    if (newMessages.ok){
                        newMessages.forEach(message=>{this.writeNewMessage(message)});
                    }
                },
                err=>console.log('Problema al cargar nuevos mensajes: '+err) 
            )
        //console.log(newMessages);
        //newMessages.forEach(message=>{this.writeNewMessage(message)})
                        
    }
    
    @ViewChild ("newMessageContainer", {read:ViewContainerRef}) newMessageContainer;

    writeNewMessage(messageInfo){
        /*
            Sacamos el user de messageInfo y a partir de ahi pedimos informacion de usuario(getUserInfo)
            Una vez obenemos la informacion del usuario mostramos el mensaje
        */
        let userInfo;
        this.userService.getUserInfo(messageInfo.user)
            .subscribe(
                user=>{
                    if (user.profile){
                        userInfo = user.profile;
                    }
                },
                err=>console.log('There was an error: '+err),
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