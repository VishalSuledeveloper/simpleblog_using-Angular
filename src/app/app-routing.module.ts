import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/core/about/about.component';
import { ContactUsComponent } from './pages/core/contact-us/contact-us.component';
import { HomeComponent } from './pages/core/home/home.component';
import { LoginComponent } from './pages/core/login/login.component';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
