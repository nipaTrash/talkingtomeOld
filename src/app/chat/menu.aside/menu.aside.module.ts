import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuAsideComponent } from './menu.aside.component';
import { MenuAsideMemberComponent } from './menu.aside.member.component';

import { TranslateModule } from '../../translate/translate.module';

@NgModule({
    imports:[CommonModule, TranslateModule],
    declarations:[MenuAsideComponent,MenuAsideMemberComponent],
    exports:[MenuAsideComponent,MenuAsideMemberComponent]
})
export class MenuAsideModule{}