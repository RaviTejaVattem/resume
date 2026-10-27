import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'print',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  printPage(): void {
    window.print();
  }
}
