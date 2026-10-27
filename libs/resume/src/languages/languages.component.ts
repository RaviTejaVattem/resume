import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/src/shared.module';

@Component({
  selector: 'languages',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {}
