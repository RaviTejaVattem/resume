import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';

@Component({
  selector: 'body-header',
  templateUrl: './body-header.component.html',
  styleUrls: ['./body-header.component.scss']
})
export class BodyHeaderComponent implements OnInit {

  totalExperience = '';

  constructor() {
    const joiningDate = dayjs('2015-01-26');
    const today = dayjs();
    const monthsOfExperience: number = today.diff(joiningDate, 'month');
    const years = Math.floor(monthsOfExperience / 12);
    const months = monthsOfExperience % 12;

    this.totalExperience = months ? `${years}.${months}` : years.toString();
  }

  ngOnInit() { }

}