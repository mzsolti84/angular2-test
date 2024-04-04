import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeToggleComponent } from '../src/app/shared/theme-toggle/theme-toggle.component';
import { ThemeService } from '../src/app/shared/services/theme.service';
import ThemeToggleTestPage from './support/pom/pages/theme-toggle/theme-toggle.page';

enum ThemeMode {
  LIGHT = 'wb_sunny',
  DARK = 'nights_stay',
}

describe('toggleTheme component test', (): void => {
  const template = `<link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <app-theme-toggle></app-theme-toggle>`;

  it('Check toggle button', (): void => {
    cy.mount(ThemeToggleComponent);
    ThemeToggleTestPage.testToggleButtonIsEnabled();
  });

  it('Check the label of the component', (): void => {
    cy.mount(template, {
      declarations: [ThemeToggleComponent],
      imports: [MatButtonModule, MatIconModule],
    });
    ThemeToggleTestPage.testComponentLabel('Light');
  });

  it('Check toggle button has icon', (): void => {
    cy.mount(template, {
      declarations: [ThemeToggleComponent],
      imports: [MatButtonModule, MatIconModule],
    });
    ThemeToggleTestPage.testToggleButtonIcon(ThemeMode.DARK);
  });

  it('Check toggle button change', (): void => {
    cy.mount(template, {
      declarations: [ThemeToggleComponent],
      imports: [MatButtonModule, MatIconModule],
    });
    ThemeToggleTestPage.testToggleButtonChange(ThemeMode.LIGHT);
  });

  it('Test service', (): void => {
    const themeService = new ThemeService();
    cy.spy(themeService, 'setDarkMode').as('toggleMode');
    cy.mount(ThemeToggleComponent, {
      componentProperties: {
        themeService,
        isDarkMode: true,
      },
    });
    ThemeToggleTestPage.testService('toggleMode');
    ThemeToggleTestPage.testServiceCalledWhith('toggleMode', false);
  });

  it('Test ToggleButtonType', (): void => {
    cy.mount(ThemeToggleComponent);
    ThemeToggleTestPage.testToggleButtonType(ThemeMode.DARK);
  });
});
