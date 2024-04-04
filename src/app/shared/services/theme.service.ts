import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode: boolean = false;

  constructor() {}

  public isDarkMode(): boolean {
    return this.darkMode;
  }

  public setDarkMode(isDarkMode: boolean): void {
    this.darkMode = isDarkMode;
    const footer: HTMLElement | null = document.querySelector('footer');
    document.body.classList.toggle('dark-theme', isDarkMode);
    footer?.classList.toggle('dark-theme', isDarkMode);
  }
}
