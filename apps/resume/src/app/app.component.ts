import { Component } from '@angular/core';
import { LayoutComponent } from '../../../../libs/core/src/layout/layout.component';
import { CoreModule } from '../../../../libs/core/src/core.module';
import { ResumeModule } from '../../../../libs/resume/src/resume.module';
import { SharedModule } from '../../../../libs/shared/src/shared.module';

@Component({
  selector: 'resume-root',
  standalone: true,
  imports: [LayoutComponent, CoreModule, ResumeModule, SharedModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';
}
