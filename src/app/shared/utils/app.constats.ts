import { InjectionToken } from '@angular/core';
import { IAppConstans } from './interfaces/app-constants-interface';

export const APP_DI_CONSTANS: IAppConstans = {
  USERNAMES: ['Gipsz Jakab', 'John Doe', 'XZY'],
};

export let APP_CONSTANS = new InjectionToken<IAppConstans>('app.constans');
