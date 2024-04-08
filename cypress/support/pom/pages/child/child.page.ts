import { ButtonTestComponent } from '../../components/button.component';
import Chainable = Cypress.Chainable;

export class ChildTestPage {
  private sendButtonLocator: string;
  private sendButton: ButtonTestComponent;

  constructor() {
    this.sendButtonLocator = 'data-cy="child-button"';
    this.sendButton = new ButtonTestComponent(this.sendButtonLocator);
  }

  protected elements = {};

  public testEvent(): ChildTestPage {
    this.sendButton.click();
    return this;
  }
}

export default new ChildTestPage();