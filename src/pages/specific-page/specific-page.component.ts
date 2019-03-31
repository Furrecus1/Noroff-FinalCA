import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-specific-page',
  templateUrl: './specific-page.component.html',
  styleUrls: ['./specific-page.component.scss']
})
export class SpecificPageComponent implements OnInit {
  public mtgcardsName;
  public sub;
  public mtgcardsId;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.mtgcardsId = params['name'];
      });
      console.log(this.mtgcardsId);
  }

}
