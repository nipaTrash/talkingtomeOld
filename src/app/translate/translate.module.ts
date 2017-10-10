import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { TranslateDirective } from './translate.directive';
import { TranslatePipe } from './translate.pipe';
import { TranslateService } from './translate.service';
import { LanguagesSelectorComponent } from './languages.selector.component';


@NgModule({
    imports:[ 
        CommonModule, 
        FormsModule
    ],
    declarations:[TranslateDirective, LanguagesSelectorComponent,TranslatePipe],
    providers:[TranslateService],
    exports:[TranslateDirective, LanguagesSelectorComponent, TranslatePipe]
})
export class TranslateModule{
    
}