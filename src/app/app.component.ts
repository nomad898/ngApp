import { Component } from '@angular/core';
import { UsersService } from './services/user/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UsersService]
})
export class AppComponent {
  title = 'Angular application';
 
  constructor() {
  }

  ngOnInit(): void {

  }
}
