import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  receips: Recipe[] = [
    new Recipe('Puranpoli', 'This is famous sweet dish in maharashtra.', 'https://i.pinimg.com/originals/26/21/1a/26211ae9bf5a0e7f1bc5a1737a5f7965.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
