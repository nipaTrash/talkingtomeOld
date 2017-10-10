import { Directive, Input, HostBinding } from '@angular/core';

import { TranslateService } from './translate.service';

import { TranslatorTexts } from './translator.texts';

@Directive({
    selector:'[translate]'
})
export class TranslateDirective{
        
    private _translateService:TranslateService;
    
    get translatorTexts(){
        return this._translateService.translatorTexts;
    }
    
    get languageActive(){
        return this._translateService.languageActive;
    }
    
    @Input() translate;
    
    @HostBinding() get innerText(){
        
        const textToGet = this.translate; 
        return this.translatorTexts[textToGet][this.languageActive];

    }
    
    constructor (translateService:TranslateService){
        this._translateService = translateService;
    }
    
}