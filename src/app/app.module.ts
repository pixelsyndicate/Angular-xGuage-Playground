/* JavaScript imports */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgxGaugeModule } from 'ngx-gauge';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';


import { XgaugeComponent } from './xgauge/xgauge.component';

@NgModule({
  declarations: [
    AppComponent, XgaugeComponent
  ],
  imports: [
     BrowserModule,
    FormsModule,
        NgxGaugeModule,
      MatInputModule, MatButtonModule, MatCheckboxModule, MatToolbarModule,
      MatSelectModule, BrowserAnimationsModule, MatSliderModule,
      MatSlideToggleModule, MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
