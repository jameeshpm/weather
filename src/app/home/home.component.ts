import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public weather: any;
  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.api.getForcast('Dublin,IE').subscribe((res) => {
      this.weather = res.body;
    });
  }

}
