import { Component, OnInit } from '@angular/core';
import { ScreenSizeService } from '../services/screen-size.service';

@Component({
  selector: 'customer-view-home',
  templateUrl: './customer-view-home.component.html',
  styleUrls: ['./customer-view-home.component.scss']
})
export class CustomerViewHomeComponent implements OnInit {

  isMinimized: boolean = false;
  constructor(
    private screenSizeService: ScreenSizeService
  ) {}

  ngOnInit(): void {
    this.screenSizeService.isMinimized$.subscribe(isMinimized => {
      this.isMinimized = isMinimized;
    })
  }

}
