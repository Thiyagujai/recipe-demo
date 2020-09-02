import { Component, OnInit } from '@angular/core';
import { RecipeAppService } from '../recipe-app.service';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Observable<any[]>
  constructor(private rs:RecipeAppService) { }

  ngOnInit(): void {
   this.recipes = this.rs.getAllRecipes().pipe(tap());
  }


}
