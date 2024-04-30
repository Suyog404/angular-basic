import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Card} from "../card/card.model";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {Card2} from "./ngmodelcard.model";

@Component({
  selector: 'app-ngmodelcard',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './ngmodelcard.component.html',
  styleUrls: ['./ngmodelcard.component.scss']
})
export class NgmodelcardComponent {
  @Input() cards2: Card2[] = []; // Array to hold cards
  @Output() titleEvent2$ = new EventEmitter<Card[]>();

  //only for ngModel example
  // Add properties to hold form data (one for each input field)
  cardName: string = '';
  cardPrice: number = 0;
  cardImageUrl: string = '';
  onSubmitNgModelExample(){
    //for ngModel example below would be the logic changes above this is logic changes for template reference variable in the form
    const newCard2:Card={
      id: Math.random().toString(36).substring(2, 15),
      name: this.cardName,
      price: this.cardPrice,
      imageUrl: this.cardImageUrl,
      description: '', // Add an empty description (optional)
    };
    this.cards2.push(newCard2);
    console.log('from ngModel:', this.cards2);
    this.titleEvent2$.emit(this.cards2);
    localStorage.setItem('cards', JSON.stringify(this.cards2)); // Update Local Storage

  }

}
