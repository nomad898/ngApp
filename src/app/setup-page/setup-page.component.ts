import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user/users.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.scss'],
})
export class SetupPageComponent implements OnInit {

  size;
  users = []
  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.size = this.usersService.size;
  }

  onChange() {
    this.usersService.setSize(+this.size);   
  }
}
