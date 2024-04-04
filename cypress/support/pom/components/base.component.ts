import Chainable = Cypress.Chainable;

export class BaseTestComponent {
  constructor(private locator: string) {}

  public get componentRef(): Chainable {
    return cy.get(this.locator);
  }

  click(): BaseTestComponent {
    this.componentRef.click();
    return this;
  }

  isVisible(): BaseTestComponent {
    this.componentRef.should('be.visible');
    return this;
  }

  isEnabled(): BaseTestComponent {
    this.componentRef.should('be.enabled');
    return this;
  }

  isDisabled(): BaseTestComponent {
    this.componentRef.should('be.disabled');
    return this;
  }

  eq(position: number): Chainable {
    return this.componentRef.eq(position);
  }
}
