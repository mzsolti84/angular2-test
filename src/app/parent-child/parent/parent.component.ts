import { Component } from '@angular/core';
import { IToMother } from '../interfaces/to-mother.interface';

@Component({
  selector: 'parent-component',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  public name = 'Zsolti';
  public obj!: IToMother;
}
