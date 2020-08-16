import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatIconModule} from '@angular/material/icon'

const SHARED_MODULES = [MatToolbarModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...SHARED_MODULES
  ],
  exports: [...SHARED_MODULES]
})
export class SharedModule { }
