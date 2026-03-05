import { Component, Input } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'mia-loading-squares',
  standalone: true,
  imports: [NgClass, NgStyle],
  templateUrl: './squares.component.html',
  styleUrl: './squares.component.scss'
})
export class SquaresComponent {
  @Input() isFullPage: boolean = false;
  @Input() color: string = '#00C1D4';
}
