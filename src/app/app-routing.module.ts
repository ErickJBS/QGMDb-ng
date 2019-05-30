import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { MoviesComponent } from '@components/movies/movies.component';
import { MovieDetailComponent } from '@components/movie-detail/movie-detail.component';
import { EditorComponent } from '@components/editor/editor.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard/0', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      { path: 'dashboard/:page', component: DashboardComponent },
      { path: 'movies/:page', component: MoviesComponent },
      { path: 'detail/:id', component: MovieDetailComponent },
      { path: 'editor', component: EditorComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
