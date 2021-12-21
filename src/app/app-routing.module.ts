import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { WelcomeComponent} from './pages/welcome/welcome.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { LoginComponent } from './pages/login/login.component';
import { ProduccionComponent } from './pages/produccion/produccion.component';
import { DistribucionComponent } from './pages/distribucion/distribucion.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { DiagramasComponent } from './pages/diagramas/diagramas.component';
import { ContactosComponent } from './pages/contactos/contactos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: '', component:MenuComponent,
    children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'empleados',component:EmpleadosComponent},
      {path:'produccion',component:ProduccionComponent},
      {path:'distribucion',component:DistribucionComponent},
      {path:'informacion',component:InformacionComponent},
      {path:'documentacion',component:DocumentacionComponent},
      {path:'diagramas',component:DiagramasComponent},
      {path:'contactos',component:ContactosComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
