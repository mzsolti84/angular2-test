import Chainable = Cypress.Chainable;

export class BaseComponent {
  constructor(private locator: string) {}

  public get componentRef(): Chainable {
    return cy.get(this.locator);
  }

  click(): BaseComponent {
    this.componentRef.click();
    return this;
  }

  isVisible(): BaseComponent {
    this.componentRef.should('be.visible');
    return this;
  }

  isEnabled(): BaseComponent {
    this.componentRef.should('be.enabled');
    return this;
  }

  isDisabled(): BaseComponent {
    this.componentRef.should('be.disabled');
    return this;
  }

  eq(position: number): Chainable {
    return this.componentRef.eq(position);
  }
}
