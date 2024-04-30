import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {Card} from "../card/card.model";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {Card3} from "./reactiveFromCard.model";

@Component({
  selector: 'app-reactive-froms-card',
  standalone: true,
  imports: [CommonModule, MatInputModule, ReactiveFormsModule, MatCardModule],
  templateUrl: './reactive-froms-card.component.html',
  styleUrls: ['./reactive-froms-card.component.scss']
})
export class ReactiveFromsCardComponent {

  @Input() cards3: Card3[] = [];

  @Output() titleEvent3$ = new EventEmitter<Card[]>();

  cardForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.cardForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      imageUrl: ['', Validators.required],
      description: '' // Optional description field
    });
  }

  onSubmit() {
    if (this.cardForm.valid) {
      const newCard: Card = {
        id: Math.random().toString(36).substring(2, 15),
        ...this.cardForm.value
      };

      this.cards3.push(newCard);
      console.log('New card:', newCard); // Updated console log for clarity
      this.titleEvent3$.emit(this.cards3);
      localStorage.setItem('cards', JSON.stringify(this.cards3));
      this.cardForm.reset(); // Reset form after submission
    }
  }

}
