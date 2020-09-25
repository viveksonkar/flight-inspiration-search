import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchModule } from './feature/search/search.module';
import { HomeModule } from './feature/home/home.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'search' },
  { path: 'home', loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule) },
  { path: 'search', loadChildren: () => import('./feature/search/search.module').then(m => m.SearchModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
