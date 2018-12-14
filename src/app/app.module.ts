import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularOpenlayersModule } from 'ngx-openlayers';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from 'ng-fullcalendar';
=======
import { HostListener } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

>>>>>>> comment-ca-marche


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LocalisationComponent } from './localisation/localisation.component';
import { AdhesionComponent } from './adhesion/adhesion.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { EquipeComponent } from './equipe/equipe.component';
import { CommentCaMarcheComponent } from './comment-ca-marche/comment-ca-marche.component';
import { GalerieMachinesComponent } from './galerie-machines/galerie-machines.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PresentationComponent,
    FooterComponent,
    LocalisationComponent,
    AdhesionComponent,
    AccueilComponent,
    AgendaComponent,
    ContactComponent,
    EquipeComponent,
    CommentCaMarcheComponent,
    GalerieMachinesComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AngularOpenlayersModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FullCalendarModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
