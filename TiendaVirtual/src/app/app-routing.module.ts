import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {TiendaComponent} from './tienda/tienda.component';
import {CarritoComponent} from './carrito/carrito.component';
import {CreacionComponent} from './creacion/creacion.component';

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: 'creacion', component: CreacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
