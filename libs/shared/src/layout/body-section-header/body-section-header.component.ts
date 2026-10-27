import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'body-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body-section-header.component.html',
  styleUrls: ['./body-section-header.component.scss']
})
export class BodySectionHeaderComponent {
  @Input() title = '';
  @Input() icon = '';
}
