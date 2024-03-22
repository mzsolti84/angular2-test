import { PageNotFoundComponent } from '../src/app/page-not-found/page-not-found.component';
import PageNotFoundTestPage from './support/pom/pages/page-not-found/page-not-found.page';

describe('Page not found component test', (): void => {
  
  it('Check if Header is exist', (): void => {
    cy.mount(PageNotFoundComponent);

    PageNotFoundTestPage.testHeader('404 - Seite nicht gefunden');
  });

  it('Check if Page not found is exist and its color is correct', (): void => {
    cy.mount(PageNotFoundComponent);

    PageNotFoundTestPage.testMainText(
      'Die Seite, die Sie suchen existiert nicht!'
    );

    PageNotFoundTestPage.testColor('black', 'red', 'yellow');
  });
});
