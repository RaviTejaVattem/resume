import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutComponent } from './layout/layout.component';
import { PrintComponent } from './print/print.component';

const components = [
  LayoutComponent,
  PrintComponent
]

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule
  ],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule { }