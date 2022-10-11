import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, UntypedFormArray, Validators } from '@angular/forms';
import {RecipeAppService} from '../recipe-app.service'
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent implements OnInit {
  addRecipeForm: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private rs: RecipeAppService) {}

  ngOnInit(): void {
    this.addRecipeForm = this.fb.group({
      nameofChef: ['',[Validators.required, Validators.minLength(3)]],
      nameofDish: ['',[Validators.required]],
      typeofMeal: ['',[Validators.required]],
      serves: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: [''],
      ingredients: this.fb.array([this.ingredientsArray()]),
    });
  }

  get ingredients() {
    return this.addRecipeForm.get('ingredients') as UntypedFormArray;
  }

  ingredientsArray(): UntypedFormGroup {
    return this.fb.group({
      nameofIngredient: [''],
      quantity: [''],
    });
  }

  addIngredients(){
    this.ingredients.push( this.ingredientsArray())
    console.log(this.addRecipeForm.value)
  }
  removeIngredient(i){
    this.ingredients.removeAt(i)
  }
  getFormValue(){
    const value = this.addRecipeForm.value
    this.rs.addNewRecipe(value);
    console.log(this.addRecipeForm.value)
  }

}
