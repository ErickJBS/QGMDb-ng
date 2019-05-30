import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  /*
duration: 92
movieAbstract: ""El Gordo y el Flaco" se embarcan en su gira de despedida. Con la ayuda de sus respectivas mujeres, ambos logran conquistar al público de las salas de Reino Unido gracias a su peculiar manera de interpretar y de entender el mundo."
movieId: 104
releaseDate: "2018-05-01T00:00:00.000Z"
  */

  movie: any;
  people: any;
  genres: any;
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
  }

}
