import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Tomatoes', 10),
    new Ingredient('Potatoes', 15),
    new Ingredient('Onions', 20)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
