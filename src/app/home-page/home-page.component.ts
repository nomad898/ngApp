import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  users = []
  searchstr = '';

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
