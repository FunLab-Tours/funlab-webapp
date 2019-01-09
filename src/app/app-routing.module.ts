import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AgendaComponent } from './agenda/agenda.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ContactComponent } from './contact/contact.component';
import { GalerieMachinesComponent } from './galerie-machines/galerie-machines.component';
import { UserComponent } from './user/user.component';
import { SearchResultComponent } from './search-result/search-result.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'agenda', component: AgendaComponent },
  { path: 'equipe', component: EquipeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'machine', component: GalerieMachinesComponent },
  { path: 'user', component: UserComponent },
  { path: 'recherche', component: SearchResultComponent },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
