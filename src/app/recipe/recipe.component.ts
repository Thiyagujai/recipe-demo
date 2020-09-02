import { Component, OnInit } from '@angular/core';
import { RecipeAppService } from '../recipe-app.service';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  recipeObs: Observable<any>
  constructor(private rs: RecipeAppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
      const snapshot = this.route.snapshot;
      const recipeId = snapshot.params['id']
      this.recipeObs = this.rs.getRecipe(recipeId).pipe((tap()))
  }

}
