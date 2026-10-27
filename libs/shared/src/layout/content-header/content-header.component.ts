import { Component, Input, ContentChild, TemplateRef, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'content-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.scss']
})
export class ContentHeaderComponent {
  @Input() dates: string[] = [];
  @Input() subtitle = '';
  @Input() title = '';

  @ContentChild('subTitleTemplate') subTitleTemplate!: TemplateRef<ElementRef>;
  @ContentChild('technologies') technologies!: TemplateRef<ElementRef>;
}
