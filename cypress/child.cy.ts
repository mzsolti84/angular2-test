import { MatButtonModule } from '@angular/material/button';
import { ChildComponent } from '../src/app/parent-child/child/child.component';
import { ParentComponent } from '../src/app/parent-child/parent/parent.component';
import ChildTestPage from './support/pom/pages/child/child.page';

describe('Child-parent component test', (): void => {
  it('Test event', (): void => {
    cy.mount(ParentComponent, {
      componentProperties: { obj: { id: 2, tool: 'Cypress' } },
      declarations: [ChildComponent, ParentComponent],
      imports: [MatButtonModule],
    });
    ChildTestPage.testEvent();
    });
  });
