import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  page: number;
  catalogSize: number;
  itemsPerPage = 10;
  movies: any;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('page') || '0';
    this.page = parseInt(param);
    this.onInit();
  }

  onInit() {
    this.data.getMovieCatalog(1, 10).subscribe(data => {
      this.movies = data;
      console.log(this.movies);
    })
    this.data.getCatalogSize().subscribe(size => {
      this.catalogSize = size;
      console.log(size);
    })
  }
}
