import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/src/shared.module';

@Component({
  selector: 'education',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {}
