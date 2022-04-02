import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybindingComponent } from './mybinding/mybinding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
const approuts:Routes=[
{path:'',component:HomeComponent},
{path:'about',component:AboutUsComponent},
{path:'product',component:ProductsComponent},
{path:'contact',component:ContactComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MybindingComponent,
    HomeComponent,
    AboutUsComponent,
    ProductsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TooltipModule.forRoot(),
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(approuts)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
