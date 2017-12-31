import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'boards/:id', component: BoardComponent},
  {path: 'dashboard', component: DashboardComponent},
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
]

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule {
  
 }
