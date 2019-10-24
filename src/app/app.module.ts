import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { KioskComponent } from './components/kiosk.component';
import { RegisterComponent } from './register/register.component';
import { HelpmenuComponent } from './helpmenu/helpmenu.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceService } from './services/service.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { appRoute } from './ng-router';
import { InterceptService } from './services/interceptor.service';
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    KioskComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    HelpmenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
  
   
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })


    
  ],
  providers: [
    ServiceService,
    InterceptService,
      {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptService,
        multi: true
      }
  ],
  bootstrap: [AppComponent]
})

@NgModule({
  declarations: [KioskComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [KioskComponent]
})
export class AppModule { }
