import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [
    CommonModule,

    FlexLayoutModule,
    
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    FlexLayoutModule,

    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: []
})
export class SharedModule { }
