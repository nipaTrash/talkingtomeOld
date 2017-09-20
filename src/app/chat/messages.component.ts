import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { ChatService } from './chat.service';
import { UserInfo } from './user-info';

import { MessageComponent } from './message.component';

import 'rxjs/add/operator/map';

@Component({
    selector:'messages',
    templateUrl:'./messages.component.html',
    styleUrls:['./messages.component.css']
})
export class MessagesComponent implements OnInit{
    
 
    constructor (private _chatService:ChatService, private _resolver:ComponentFactoryResolver){
        
        //setInterval(()=>{this.updateMessages()}, 5000)

    }
  
    
    ngOnInit(){

        this._chatService.getConversationHistory()
            .subscribe(
                messages=>{
                    console.log(messages);
                    messages.messages.forEach(message=>{this.writeNewMessage(message)})  
                }
            )
    }
    
    lastMessageUtc = 0;

    updateMessages(){
        
        const newMessages = this._chatService.getNewMessages(this.lastMessageUtc);
        
        newMessages.forEach(message=>{this.writeNewMessage(message)})
                        
    }
    
    @ViewChild ("newMessageContainer", {read:ViewContainerRef}) newMessageContainer;

    writeNewMessage(messageInfo){
        /*
            Sacamos el user de messageInfo y a partir de ahi pedimos informacion de usuario(getUserInfo)
            Una vez obenemos la informacion del usuario mostramos el mensaje
        */
        let userInfo;
        this._chatService.getUserInfo(messageInfo.user)
            .subscribe(
                user=>{
                    if (user.profile)
                        //messageRef.instance.userInfo = user.profile;
                        userInfo = user.profile;
                },
                err=>console.log('There was an error: '+err),
                ()=>{
                    const messageFactory = this._resolver.resolveComponentFactory(MessageComponent);
                    const messageRef = this.newMessageContainer.createComponent(messageFactory);
        
                    messageRef.instance.messageInfo = messageInfo;
                    messageRef.instance.userInfo = userInfo;
                }
            );
        
        if (this.lastMessageUtc < messageInfo.ts) this.lastMessageUtc = messageInfo.ts;

    }
    
    
}