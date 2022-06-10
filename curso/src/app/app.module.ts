import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './404/404.component';
import { CursModules } from './curs/curs.modules';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ErrorComponent,
  
  ],
  imports: [
    BrowserModule,
    CursModules,
    HttpClientModule,
    RouterModule.forRoot([ 
      {
      path: '', redirectTo: 'curs', pathMatch: 'full'
      },
      {
        path: '**', component: ErrorComponent
      }
    
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
