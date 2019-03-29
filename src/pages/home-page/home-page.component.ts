import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MtgCardsService } from './../../services/mtg-cards.service';
import 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [MtgCardsService]
})
export class HomePageComponent implements OnInit {

  public mtgcardsDetail: Array<any>;
 
  constructor(protected router: Router, protected mtgcardsService: MtgCardsService) {
   }

  ngOnInit() {
    
    if (!sessionStorage.getItem('AuthToken')) {
      this.router.navigate(['/']);
    }
    this.mtgcardsService.getCards()
    .subscribe(
      mtgcards => {
      this.mtgcardsDetail = mtgcards.cards;
    });
    
    
  }
  
  
 
}

