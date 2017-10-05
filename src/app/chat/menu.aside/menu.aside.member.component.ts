import { Component, Input } from '@angular/core';

@Component({
    selector:'menu-aside-member',
    templateUrl:'./menu.aside.member.component.html',
    styleUrls:['./menu.aside.member.component.css']
})
export class MenuAsideMemberComponent{
       
    @Input() memberInfo;
    
}