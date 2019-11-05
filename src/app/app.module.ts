import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { FormComponent } from './form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LastUpdatePipe } from './pipe/last-update.pipe';
import { RepositoryComponent } from './repository/repository.component';
import { HoverEffectDirective } from './hover-effect.directive';
import { HoverDirective } from './directive/hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    FormComponent,
    NotFoundComponent,
    NavbarComponent,
    LastUpdatePipe,
    RepositoryComponent,
    HoverEffectDirective,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
