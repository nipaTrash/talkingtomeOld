import { Component, OnInit } from '@angular/core';

import { TranslateService } from './translate.service';

@Component({
    selector:'languages-selector',
    templateUrl:'./languages.selector.component.html'
})
export class LanguagesSelectorComponent implements OnInit{
    
    get languageActive(){
        return this._translateService.languageActive;
    }
    get translatorTexts(){
        return this._translateService.translatorTexts;
    }
        
    private _translateService:TranslateService;
    
    constructor (translateService:TranslateService){
        this._translateService = translateService;
    }
    
    changeLanguage(language){
        this._translateService.changeLanguage(language);
    }
    
    ngOnInit(){
        this._translateService.getTranslatorTexts();
    }
    /*
    private _getTranslatorTexts():any{
        this._translateService.getTranslatorTexts()
            .subscribe((data)=>this._translatorTexts = data);
            
    }*/
}