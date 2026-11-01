import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { SkillGroup } from '../data/resume.model';

@Component({
  selector: 'resume-skill-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="skill-groups">
      @for (group of groups(); track group.name) {
        <div class="skill-group">
          <h3>{{ group.name }}</h3>
          <ul class="skill-chips">
            @for (item of group.items; track item) {
              <li>{{ item }}</li>
            }
          </ul>
        </div>
      }
    </div>
  `,
})
export class SkillListComponent {
  readonly groups = input.required<readonly SkillGroup[]>();
}
