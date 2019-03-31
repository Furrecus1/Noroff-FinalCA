import { Component, OnInit } from '@angular/core';
import { MtgCardsService } from './../../services/mtg-cards.service';


@Component({
  selector: 'app-specific-page',
  templateUrl: './specific-page.component.html',
  styleUrls: ['./specific-page.component.scss'],
  providers: [MtgCardsService]
})
export class SpecificPageComponent implements OnInit {

  public mtgcardsDetail: Array<any>;
  

  constructor( protected mtgcardsService: MtgCardsService) { }

  ngOnInit() {
    this.mtgcardsService.getCards()
    .subscribe(
      mtgcards => {
      this.mtgcardsDetail = mtgcards.cards;
    });
  }

}
