import { NgModule } from '@angular/core';
import { SquaresComponent } from './components/squares/squares.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [SquaresComponent],
  imports: [CommonModule],
  exports: [SquaresComponent],
})
export class MiaLoadingModule {}
