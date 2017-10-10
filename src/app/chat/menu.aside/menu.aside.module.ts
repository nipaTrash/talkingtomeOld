import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuAsideComponent } from './menu.aside.component';
import { MenuAsideMemberComponent } from './menu.aside.member.component';

@NgModule({
    imports:[CommonModule],
    declarations:[MenuAsideComponent,MenuAsideMemberComponent],
    exports:[MenuAsideComponent,MenuAsideMemberComponent]
})
export class MenuAsideModule{}