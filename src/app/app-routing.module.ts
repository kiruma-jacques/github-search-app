import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepositoryComponent } from './repository/repository.component';


const routes: Routes = [
  {path:'home', component: DisplayComponent},
  // {path:"**", component: NotFoundComponent },
  {path: '', redirectTo:'home', pathMatch: 'full'},
  {path: 'repos', component: RepositoryComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
