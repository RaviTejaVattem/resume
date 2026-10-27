import { Component, OnInit } from '@angular/core';
import dayjs from 'dayjs';

@Component({
  selector: 'body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.scss']
})
export class BodyHeaderComponent implements OnInit {
  yearsOfExperience = '';

  ngOnInit(): void {
    const joiningDate = dayjs('2015-01-26');
    const today = dayjs();
    this.yearsOfExperience = `${today.diff(joiningDate, 'year')}+`;
  }
}
