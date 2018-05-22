import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HoverDirective } from './directives/hover/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
