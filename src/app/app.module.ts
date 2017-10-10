import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { ChatModule } from './chat/chat.module';
import { SignInModule } from './signin/signin.module';

import { AppComponent } from './app.component';

import { ChatComponent } from './chat/chat.component';
import { SignInComponent } from './signin/signin.component';

const appRoutes: Routes =[
    {path:'', component:SignInComponent},
    {path:'chat', component:ChatComponent}
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChatModule,
    SignInModule,
    RouterModule.forRoot(
        appRoutes,
        {enableTracing: true},
    )
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule {
    
    

}
