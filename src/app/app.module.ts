import {LOCALE_ID, NgModule} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import localeFr from '@angular/common/locales/fr';
import localeZh from '@angular/common/locales/zh';
registerLocaleData(localeFr);
registerLocaleData(localeZh);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HeaderComponent, SharedModule],
  providers: [{provide: LOCALE_ID, useFactory: localeIdFactory}],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function localeIdFactory() {
  const language = navigator.language || 'en-US';
  if (language.startsWith('fr')) {
    return 'fr-FR';
  } else if (language.startsWith('zh')) {
    return 'zh-CN';
  } else {
    return 'en-US';
  }
}
