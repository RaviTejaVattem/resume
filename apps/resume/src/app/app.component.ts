import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { SkillListComponent } from './components/skill-list.component';
import { resume } from './data/resume.data';

@Component({
  selector: 'resume-root',
  imports: [SkillListComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly resume = resume;
  readonly avatarFailed = signal(false);
  readonly initials = computed(() => this.resume.name.split(' ').map((part) => part[0]).slice(0, 2).join(''));

  printResume(): void {
    window.print();
  }
}
