import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from '@components/dashboard/dashboard.component';
import { MoviesComponent } from '@components/movies/movies.component';
import { MovieDetailComponent } from '@components/movie-detail/movie-detail.component';
import { EditorComponent } from '@components/editor/editor.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'dashboard', component: DashboardComponent, children: [
          { path: 'detail:id', component: MovieDetailComponent }
        ]
      },
      { path: 'movies', component: MoviesComponent },
      { path: 'editor', component: EditorComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
