import { BaseTestComponent } from './base.component';

export class ButtonTestComponent extends BaseTestComponent {
  constructor(locator: string) {
    if (locator.includes('data-cy')) {
      super(`button[${locator}]`);
    } else {
      super(`button:contains("${locator}")`);
    }
  }

  hasText(buttonText: string): ButtonTestComponent {
    this.componentRef.within(() => {
      cy.get('span').contains(buttonText);
    });
    return this;
  }

  hasIcon(iconText: string): ButtonTestComponent {
    this.componentRef.within(() => {
      cy.get('mat-icon')
        .should('have.prop', 'clientHeight')
        .should('be.greaterThan', 0);
      cy.get('mat-icon').should('contain', iconText);
    });
    return this;
  }

  testIconType(iconText: string): ButtonTestComponent {
    this.componentRef.within(() => {
      cy.get('mat-icon').should('contain', iconText);
    });
    return this;
  }

  triggerMouseover(): ButtonTestComponent {
    this.componentRef.trigger('mouseover');
    return this;
  }
}
