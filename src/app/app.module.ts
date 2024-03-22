import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FlexLayoutServerModule } from '@angular/flex-layout/server';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MessageService } from './shared/services/message.service';
import { environment } from '../enviroments/environment';
import { API_BASE_URL } from './shared/services/common.service';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
} from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { APP_CONSTANS, APP_DI_CONSTANS } from './shared/utils/app.constats';
import { FooterComponent } from './shared/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { ThemeToggleComponent } from './shared/theme-toggle/theme-toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    PageNotFoundComponent,
    FooterComponent,
    ThemeToggleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,

    //App
    AppRoutingModule,
    BrowserAnimationsModule,

    // Material
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,

    FlexLayoutServerModule,
    FlexLayoutModule,
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration(),
    MessageService,
    { provide: API_BASE_URL, useValue: environment.apiRoot },
    { provide: APP_CONSTANS, useValue: APP_DI_CONSTANS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
