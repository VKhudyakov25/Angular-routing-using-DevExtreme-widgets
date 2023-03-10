import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxDrawerModule, DxListModule, DxMenuModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, ThirdComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxMenuModule,
    DxDrawerModule,
    DxListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
