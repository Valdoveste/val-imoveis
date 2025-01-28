import { NgModule } from '@angular/core';
import { BrowserModule, Meta, Title, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PropertieComponent } from './components/propertie/propertie.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PropertiesComponent } from './components/properties/properties.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMap } from '@angular/google-maps';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PropertieSearchbarComponent } from "./components/propertie-searchbar/propertie-searchbar.component";
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PropertieComponent,
    AboutComponent,
    ContactComponent,
    PropertiesComponent,
    WrapperComponent,
    PropertieSearchbarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxMaskDirective,
    NgxMaskPipe,
    GoogleMapsModule,
    GoogleMap,
    HttpClientModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [provideNgxMask(), Title, Meta, provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
