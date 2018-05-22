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

  users = []

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    // this.users = this.usersService.users;    
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
