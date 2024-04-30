import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Card } from './card.model';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() cards: Card[] = []; // Array to hold cards
  @Output() titleEvent$ = new EventEmitter<Card[]>();


  //Accessing form values of template driven form with @ViewChild and NgForm
//@ViewChild and NgForm is needed if you want to access other form functionalities (e.g., form validation) provided by NgForm
  @ViewChild('cardForm') cardForm!: NgForm;

  onSubmit() {
    const cardForm = this.cardForm.value; // Get form data
    console.log('cardForm: ',this.cardForm.value);

    const newCard: Card = { // Create a new Card object
      id: Math.random().toString(36).substring(2, 15), // Generate a random ID
      name: cardForm.name,
      price: cardForm.price,
      imageUrl: cardForm.imageUrl,
      description: '', // Add an empty description (optional)
    };

    // Emit the new card through the event emitter (optional)
    // this.titleEvent$.emit(newCard);

    // Assuming you want to manage cards within this component
    this.cards.push(newCard);
    console.log('from template reference:', this.cards);
    this.titleEvent$.emit(this.cards);// Add the new card to the cards array
    localStorage.setItem('cards', JSON.stringify(this.cards)); // Update Local Storage

  }


}
