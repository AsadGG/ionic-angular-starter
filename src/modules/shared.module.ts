import {
  DatePipe,
  NgClass,
  NgStyle,
  NgTemplateOutlet,
  TitleCasePipe,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const imports = [
  NgClass,
  NgTemplateOutlet,
  NgStyle,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
];
const pipes = [DatePipe, TitleCasePipe];

@NgModule({
  declarations: [],
  imports: [...imports, ...pipes],
  exports: [...imports, ...pipes],
  providers: [...pipes],
})
export class SharedModule {}
