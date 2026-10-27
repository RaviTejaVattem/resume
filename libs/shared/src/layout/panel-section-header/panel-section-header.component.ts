import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'panel-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-section-header.component.html',
  styleUrls: ['./panel-section-header.component.scss']
})
export class PanelSectionHeaderComponent implements OnInit {
  @Input() title = '';
  @Input() icon = '';
}
