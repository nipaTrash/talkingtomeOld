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
    
    @Input('translate') translate;
    
    @HostBinding() get innerText(){
        
        const textToGet = this.translate; 
        
        return this._translate(textToGet);

    }
    
    constructor (translateService:TranslateService){
        this._translateService = translateService;
    }
    
    @Input ('placeholder') placeholder;
    
    @HostBinding('attr.placeholder')get translater(){

        const textToGet = this.placeholder; 
        
        return this._translate(textToGet);
    }
    
    private _translate(textToGet){
        
        if (this.translatorTexts[textToGet] !== undefined){
            return this.translatorTexts[textToGet][this.languageActive];
        }else{
            return textToGet;
        }
        
    }
}
