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
  pcards: Card[] = [];
  pcards2: Card[] = [];
  pcards3: Card[] = [];

  addCard(updatedCard: Card[]) {
   this.pcards= updatedCard;
    localStorage.setItem('cards', JSON.stringify(this.pcards)); // Update Local Storage
  }
  addCard2(updatedCard2ForngModel:Card[]) {
    this.pcards2= updatedCard2ForngModel;
    localStorage.setItem('cards', JSON.stringify(this.pcards2)); // Update Local Storage
  }

  addCard3(updatedCardReactiveForm:Card[]){
    this.pcards3= updatedCardReactiveForm;
    localStorage.setItem('cards', JSON.stringify(this.pcards3)); // Update Local Storage
  }
}
