import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    
    isPublic: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
    isPublic$: Observable<boolean> = this.isPublic.asObservable();

    constructor() { }

    getIsPublic(){
        return this.isPublic;
    }
    setIsPublic(isPublic: boolean){
        this.isPublic.next(isPublic);
    }
}