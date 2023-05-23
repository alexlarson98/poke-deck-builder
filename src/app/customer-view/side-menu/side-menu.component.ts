import { Component } from '@angular/core';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  isMinimized: boolean = false;

  toggleMenu(): void {
    this.isMinimized = !this.isMinimized;
  }
}
