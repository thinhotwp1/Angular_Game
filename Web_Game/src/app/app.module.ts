import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { GaugeModule } from 'angular-gauge';
// import { MatTabsModule } from 'angular/material/tab';
// import { MatIconModule } from 'angular/material/icon';
// import { MatFormFieldModule } from 'angular/material/form-field';
// import { MatSelectModule } from 'angular/material/select';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    BrowserAnimationsModule,
    // MatTabsModule,
    // MatIconModule,
    // MatFormFieldModule,
    // MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
