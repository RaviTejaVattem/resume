import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Skill } from '../data/resume.model';

@Component({
  selector: 'resume-skill-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="skill-list">
      @for (skill of skills(); track skill.name) {
        <li>
          <div class="skill-label"><span>{{ skill.name }}</span><small>{{ level(skill.value) }}</small></div>
          <meter min="0" max="100" [value]="skill.value" [attr.aria-label]="skill.name + ' proficiency'">{{ skill.value }}%</meter>
        </li>
      }
    </ul>
  `,
})
export class SkillListComponent {
  readonly skills = input.required<readonly Skill[]>();

  level(value: number): string {
    if (value === 100) return 'Expert';
    if (value >= 80) return 'Very Good';
    if (value >= 60) return 'Intermediate';
    if (value >= 40) return 'Good';
    return 'Basic';
  }
}
