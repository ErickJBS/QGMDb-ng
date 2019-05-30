import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';
import { AuthService } from '@services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  people: any;
  genres: any;
  reviews: any;
  id: any;
  rating: number;
  content: string;

  constructor(
    private route: ActivatedRoute,
    private data: DataService,
    private auth: AuthService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.onInit();
  }

  onInit() {
    this.data.getMovieDetails(this.id).subscribe(movie => { this.movie = movie });
    this.data.getMoviePeople(this.id).subscribe(people => { this.people = people });
    this.data.getMovieGenres(this.id).subscribe(genres => { this.genres = genres });
    this.data.getMovieReviews(this.id).subscribe(reviews => { this.reviews = reviews; });
  }

  private stars(n: number) {
    return Array(n);
  }

  sendReview() {
    const user = this.auth.getUser();
    if (!user) {
      this.snackBar.open('Inicie sesión para hacer esto', 'Aceptar', {
        duration: 3000
      });
      return;
    }
    this.data.publishReview(user, this.id, this.rating, this.content).subscribe(result => {
      if (result) {
        this.snackBar.open('Nueva reseña añadida', 'Aceptar', {
          duration: 3000
        });
      }
    })
  }

}
