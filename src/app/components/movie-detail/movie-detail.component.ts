import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

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

  constructor(
    private route: ActivatedRoute,
    private data: DataService
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

}
