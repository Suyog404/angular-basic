import { Component } from '@angular/core';
import { Card } from './components/card/card.model';
import {CommonModule} from "@angular/common";
import {CardComponent} from "./components/card/card.component";
import {HeaderComponent} from "./components/header/header.component";
import {NgmodelcardComponent} from "./components/ngmodelcard/ngmodelcard.component";
import {ReactiveFromsCardComponent} from "./components/reactive-froms-card/reactive-froms-card.component"; // Import Card interface

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardComponent, HeaderComponent, NgmodelcardComponent, ReactiveFromsCardComponent], // Import components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic';
  cards: Card[] = [];

  addCard(updatedCard: Card[]) {
    // console.log(updatedCard);
   this.cards= updatedCard;
   // localStorage.setItem('cards', JSON.stringify(this.cards)); // Update Local Storage
  }
  addCard2(updatedCard2forngModel: Card[]) {
    // console.log(updatedCard);
    this.cards= updatedCard2forngModel;
    localStorage.setItem('cards', JSON.stringify(this.cards)); // Update Local Storage
  }

  addCard3(updatedCardReactiveForm: Card[]){
    this.cards= updatedCardReactiveForm;
    localStorage.setItem('cards', JSON.stringify(this.cards)); // Update Local Storage
  }
}
