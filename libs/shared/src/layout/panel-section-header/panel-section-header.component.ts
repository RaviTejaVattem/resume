import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-section-header.component.html',
  styleUrls: ['./panel-section-header.component.scss']
})
export class PanelSectionHeaderComponent {
  @Input() title = '';
  @Input() icon = '';
}
