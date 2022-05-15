import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/card';
import { Root } from 'src/app/models/slip';
import { SlipService } from 'src/app/servise/slip.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // injetando um servico
  constructor(private slipService: SlipService) { }

  ngOnInit(): void {
    this.initCards();
    console.log(this.cards);
    this.getSlip()
  }

  cards: Card[] = [];
  slip?: Root;

  initCards() {
    let card: Card = {};
    card.title = 'Título1';
    card.subTitle = 'Sub Título1';
    card.color = 'primary';

    let card1: Card = {};
    card1.title = 'Título2';
    card1.subTitle = 'Sub Título2';
    card1.color = 'success';

    let card2: Card = {};
    card2.title = 'Título3';
    card2.subTitle = 'Sub Título3';
    card2.color = 'danger';

    this.cards.push(card);
    this.cards.push(card1);
    this.cards.push(card2);
  }

  getSlip() {
    this.slipService.getSlips().subscribe((data: Root) => { this.slip = data; console.log(this.slip) });
  }

}
