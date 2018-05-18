import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  users = [
    { name: 'Name 1' },
    { name: 'Name 2' },
    { name: 'Name 3' },
    { name: 'Name 4' },
    { name: 'Name 5' },
  ]
}
