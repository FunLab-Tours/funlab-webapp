import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AngularOpenlayersModule } from 'ngx-openlayers';
import { HostListener } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from 'ng-fullcalendar';


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
import { IndexComponent } from './index/index.component';
import { EquipeComponent } from './equipe/equipe.component';
import { CommentCaMarcheComponent } from './comment-ca-marche/comment-ca-marche.component';

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
    IndexComponent,
    EquipeComponent,
    CommentCaMarcheComponent,

  ],
  imports: [
    BrowserModule,
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
