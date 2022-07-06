import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfficheAnnonceComponent } from './components/affiche-annonce/affiche-annonce.component';
import { AnnonceComponent } from './components/annonce/annonce.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfilComponent } from './components/profil/profil.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path:'register' , component:RegisterComponent},
  {path:'' , component:HomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'create' , component:AnnonceComponent},
  {path:'profil' , component:ProfilComponent},
  {path:'afficher' , component:AfficheAnnonceComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
