import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../services/screen-size.service';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  isMinimized: boolean = false;

  constructor(
    private screenSizeService: ScreenSizeService,
  ) {}

  ngOnInit(): void {
    this.screenSizeService.isMinimized$.subscribe(isMinimized => {
      this.isMinimized = isMinimized;
    })
  }

  toggleMenu(): void {
    this.isMinimized = !this.isMinimized;
  }
}
