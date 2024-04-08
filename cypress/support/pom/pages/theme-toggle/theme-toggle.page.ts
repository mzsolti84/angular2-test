import Chainable = Cypress.Chainable;
import { ButtonTestComponent } from '../../components/button.component';

export class ThemeToggleTestPage {
  private toggleButtonLocator: string;
  private toggleButton: ButtonTestComponent;
  private labelLocator: string;

  constructor() {
    this.toggleButtonLocator = 'data-cy="theme-toggle-button"';
    this.labelLocator = 'data-cy="toggle-label"';
    this.toggleButton = new ButtonTestComponent(this.toggleButtonLocator);
  }

  protected elements = {
    label: (): Chainable<JQuery<HTMLElement>> => cy.get(`span[${this.labelLocator}]`),
  };

  public testToggleButtonIsEnabled(): ThemeToggleTestPage {
    this.toggleButton.isVisible();
    this.toggleButton.isEnabled();
    return this;
  }

  public testToggleButtonIcon(icon: string): ThemeToggleTestPage {
    this.toggleButton.hasIcon(icon);
    return this;
  }

  public testToggleButtonType(text: string): ThemeToggleTestPage {
    this.toggleButton.testIconType(text);
    return this;
  }

  public testToggleButtonChange(icon: string): ThemeToggleTestPage {
    this.toggleButton.click();
    this.toggleButton.hasIcon(icon);
    return this;
  }

  public testComponentLabel(label: string): ThemeToggleTestPage {
    this.elements.label().should('have.text', label);
    return this;
  }

  public testService(spy: string): ThemeToggleTestPage {
    this.toggleButton.click();
    cy.get(`@${spy}`).should('be.called');
    return this;
  }

  public testServiceCalledWhith(spy: string, byWith: any): void {
    cy.get(`@${spy}`).should('have.been.calledWith', byWith);
  }
}

export default new ThemeToggleTestPage();
