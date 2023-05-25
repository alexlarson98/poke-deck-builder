import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
  ) {}

  title = 'reviews-app';
  isPublic: boolean = false;

  ngOnInit() {
    this.authService.isPublic$.subscribe((data) => {
      console.log(data)
      this.isPublic = data;
    });
  }
}
