import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '@services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  page: number;
  functions: any;

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
    this.data.getFunctions(1, 10).subscribe(data => {
      this.functions = data;
      console.log(this.functions);
    })
  }

}
