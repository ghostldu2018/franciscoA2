import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GhostComponent } from './ghost.component';


const routes: Routes = [
  {path: 'ghost', component: GhostComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GhostRoutingModule { }

