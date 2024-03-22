import Chainable = Cypress.Chainable;

export class PageNotFoundTestPage {
  private headerLocator: string;
  private pageNotFoundLocator: string;
  private blackColor: string;
  private yellowColor: string;
  private redColor: string;
  private colorTrio: Map<string, string>;

  constructor() {
    this.headerLocator = 'h1';
    this.pageNotFoundLocator = 'p.german';
    this.blackColor = 'rgb(0, 0, 0)';
    this.redColor = 'rgb(217, 83, 79)';
    this.yellowColor = 'rgb(255, 215, 0)';
    this.colorTrio = new Map([
      ['black', this.blackColor],
      ['yellow', this.yellowColor],
      ['red', this.redColor],
    ]);
  }

  private getTextColor(color: string): string {
    return this.colorTrio.get(color)!;
  }

  protected elements = {
    header: (): Chainable<JQuery<HTMLElement>> => cy.get(this.headerLocator),
    mainText: (): Chainable<JQuery<HTMLElement>> =>
      cy.get(this.pageNotFoundLocator),
    textLocator: (color: string): Chainable<JQuery<HTMLElement>> =>
      cy.get(`span.${color}`),
  };

  testHeader(text: string): PageNotFoundTestPage {
    this.elements.header().should('have.text', text);
    return this;
  }

  testMainText(text: string): PageNotFoundTestPage {
    this.elements.mainText().should('have.text', text);
    return this;
  }

  testColor(...colors: string[]): PageNotFoundTestPage {
    colors.forEach((color: string) =>
      this.elements
        .textLocator(color)
        .should('have.css', 'color', this.getTextColor(color))
    );
    return this;
  }
}

export default new PageNotFoundTestPage();