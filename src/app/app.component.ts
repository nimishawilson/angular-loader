import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-loader';
  constructor(private httpService: HttpService, public loadingService: LoadingService) {

  }

  ngOnInit(): void {
    this.httpService.getCountries().subscribe((data) => {
      console.log(data)
    })
  }
}
