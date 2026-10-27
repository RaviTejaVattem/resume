import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/src/shared.module';

@Component({
  selector: 'experience',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {}
