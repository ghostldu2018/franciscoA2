import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhostComponent } from './ghost/ghost.component';
import { FranciscoComponent } from './francisco/francisco.component';
import { GhostLDUComponent } from './ghost-ldu/ghost-ldu.component';
import { AlarconComponent } from './alarcon/alarcon.component';
import { CuartaPaginaComponent } from './cuarta-pagina/cuarta-pagina.component';
import { QuintaPaginaComponent } from './quinta-pagina/quinta-pagina.component';

const routes: Routes = [
{path: '' , redirectTo: '/ghost', pathMatch: 'full'}, 
{path: 'ghost', component: GhostComponent},
{path: 'francisco', component: FranciscoComponent},
{path: 'ghostLDU', component: GhostLDUComponent},
{path: 'Alarcon', component: AlarconComponent},
{path: 'cuartaPagina', component: CuartaPaginaComponent},
{path: 'quintaPagina', component: QuintaPaginaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
