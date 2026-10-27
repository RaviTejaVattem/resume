import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  TemplateRef
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'layout',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent {
  @ContentChild('sideTemplate') sideTemplate!: TemplateRef<ElementRef>;
  @ContentChild('contentTemplate') contentTemplate!: TemplateRef<ElementRef>;
}
