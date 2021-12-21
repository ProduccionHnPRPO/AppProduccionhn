import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { WelcomeComponent} from './pages/welcome/welcome.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { LoginComponent } from './pages/login/login.component';
import { ProduccionComponent } from './pages/produccion/produccion.component';
import { DistribucionComponent } from './pages/distribucion/distribucion.component';
import { InformacionComponent } from './pages/informacion/informacion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  { path: 'login', component: LoginComponent },
  { path: '', component:MenuComponent,
    children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'empleados',component:EmpleadosComponent},
      {path:'produccion',component:ProduccionComponent},
      {path:'distribucion',component:DistribucionComponent},
      {path:'informacion',component:InformacionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
