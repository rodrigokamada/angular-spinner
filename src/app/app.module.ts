import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxSpinnerModule,
    AppRoutingModule,
  ],
  providers: [
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {
}
