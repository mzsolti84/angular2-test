import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IToMother } from '../interfaces/to-mother.interface';

@Component({
  selector: 'child-component',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() public parentData!: string;
  @Output() public childEvent: EventEmitter<IToMother> = new EventEmitter();

  public childData: IToMother = {
    id: 1,
    tool: 'Cypress',
  };

  public fireChildEvent() {
    this.childEvent.emit(this.childData);
  }
}
