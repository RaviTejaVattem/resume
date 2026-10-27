import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/src/shared.module';

@Component({
  selector: 'software',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {}
