import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatIconModule} from '@angular/material/icon';
 import {MatButtonModule} from '@angular/material/button';

const SHARED_MODULES = [MatToolbarModule, MatIconModule, MatButtonModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...SHARED_MODULES
  ],
  exports: [...SHARED_MODULES]
})
export class SharedModule { }
