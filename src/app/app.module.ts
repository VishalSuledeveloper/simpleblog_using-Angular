import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HomeComponent } from './pages/core/home/home.component';
import { AboutComponent } from './pages/core/about/about.component';
import { ContactUsComponent } from './pages/core/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './pages/shared/modal/modal.component';
import { LoginComponent } from './pages/core/login/login.component';
import { HelperService } from '../app/pages/services/helper.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    ModalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [HelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
