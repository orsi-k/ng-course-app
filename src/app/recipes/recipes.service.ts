import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Simply a test',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/chana-masala-recipe-500x500.jpg',
      [new Ingredient('Tomato', 1)]
    ),
    new Recipe(
      'Another Test Recipe',
      'Simply another test',
      'https://www.vegrecipesofindia.com/wp-content/uploads/2020/01/paneer-butter-masala-5.jpg',
      [
        new Ingredient('Tomato', 1),
        new Ingredient('Egg', 2),
      ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipe(index: number) {
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToSL (ingredients:Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }
}
