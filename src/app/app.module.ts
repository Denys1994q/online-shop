import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './layout/header/header.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {LoaderInterceptor} from './interceptors/loader.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {FooterComponent} from './layout/footer/footer.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, HeaderComponent, FooterComponent, SharedModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
