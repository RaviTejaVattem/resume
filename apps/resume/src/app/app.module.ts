import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from '../../../../libs/core/src/layout/layout.component';
import { ResumeModule } from '../../../../libs/resume/src/resume.module';
import { CoreModule } from '../../../../libs/core/src/core.module';
import { SharedModule } from '../../../../libs/shared/src/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent,
    LayoutComponent,
    CoreModule,
    ResumeModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
