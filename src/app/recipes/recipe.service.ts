import { EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://www.seriouseats.com/2020/05/20200504-vegetable-pancakes-sho-spaeth1.jpg'),
    new Recipe(
      'A Test Recipe 2',
      'This is another test',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg.rend.hgtvcom.826.620.suffix/1537973085542.jpeg'),
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
}
