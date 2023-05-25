import { Injectable } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';

@Injectable()

export class ScreenSizeService {
  private isMinimized: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isMinimized$ = this.isMinimized.asObservable();

  constructor() {
    this.updateScreenSize();
    fromEvent(window, 'resize').subscribe(() => {
      this.updateScreenSize();
    });
  }

  private updateScreenSize() {
    
    if (window.innerWidth > 768) {
        this.isMinimized.next(false);
    }
    else {
        this.isMinimized.next(true);
    }
  }
}
