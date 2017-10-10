import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { TranslatorTexts } from './translator.texts';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class TranslateService{
    
    private _http:Http;
    
    constructor (http:Http){
        this._http = http;
    }
    
    private _translatorTexts;
    
    private _languageActive:string = "es";
    
    get languageActive():string{
        return this._languageActive;
    }
    get translatorTexts():Object{
        return this._translatorTexts;
    }
    
    getTranslatorTexts():any{
        this._getTranslatorTexts()
            .subscribe((data)=>this._translatorTexts = data);
            
    }
    private _getTranslatorTexts():any{
        return this._http.get("assets/translatorTexts.json")
            .map((data:any)=>data.json());
        
    }
    
    changeLanguage(language){
        this._languageActive = language;
    }
    
}