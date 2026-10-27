import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { PrintComponent } from './print/print.component';

const components = [PrintComponent];

@NgModule({
  imports: [CommonModule, MatIconModule],
  declarations: [...components],
  exports: [...components]
})
export class CoreModule {}
