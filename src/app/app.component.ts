import { Component, OnInit } from '@angular/core';
import { MockAddsService } from './mock-adds.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'header-bidder';
  adds = [];

  constructor(private mockaddsService: MockAddsService) {

  }

  ngOnInit() {
    this.mockaddsService.getAdds().subscribe((resp) => {
      this.adds = resp.sort((ad1, ad2) => ad2.cpi - ad1.cpi);
    })
  }
}
