import { Component, OnChanges, Input, SimpleChange } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'progress-bar',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnChanges {
  @Input() category = '';
  @Input() value = 50;

  description = 'Good';

  ngOnChanges(changes: { value?: SimpleChange }) {
    if (changes.value) {
      if (this.value === 100) {
        this.description = 'Expert';
      } else if (this.value >= 80) {
        this.description = 'Very Good';
      } else if (this.value >= 60) {
        this.description = 'Intermediate';
      } else if (this.value >= 40) {
        this.description = 'Good';
      } else {
        this.description = 'Basic';
      }
    }
  }
}
