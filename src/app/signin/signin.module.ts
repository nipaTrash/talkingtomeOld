import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInComponent } from './signin.component';
import { SignInService } from './signin.service';

@NgModule({
    declarations:[ SignInComponent],
    imports:[ CommonModule ],
    providers:[ SignInService ],
    exports:[ SignInComponent ]
})
export class SignInModule{ }