import { Component } from '@angular/core';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService],
})
export class RecipesComponent {
}
