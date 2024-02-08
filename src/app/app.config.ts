import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, DEFAULT_CURRENCY_CODE, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, provideRouter } from '@angular/router';
import { errorTailorConfig } from '@burand/angular';
import { provideErrorTailorConfig } from '@ngneat/error-tailor';
import { provideEnvironmentNgxCurrency } from 'ngx-currency';
import { provideEnvironmentNgxMask } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { environment } from '../environments/environment';
import { routes } from './app.routes';
import { ApiErrorInterceptor } from './core/interceptors/api-error.interceptor';
import { JwtInterceptor } from './core/interceptors/jwt.interceptor';
import { UrlInterceptor } from './core/interceptors/url.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideErrorTailorConfig(errorTailorConfig),
    provideEnvironmentNgxMask(),
    provideEnvironmentNgxCurrency({
      prefix: 'R$ ',
      thousands: '.',
      decimal: ',',
      align: 'left',
      allowNegative: false
    }),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiErrorInterceptor, multi: true },
    importProvidersFrom(
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      RouterModule,
      ToastrModule.forRoot(),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideFirebaseApp(() => initializeApp(environment.firebase))
    )
  ]
};
