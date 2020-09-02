import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction} from '@angular/fire/database';
import { catchError, map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeAppService {

  constructor(private afd: AngularFireDatabase) {}

  addNewRecipe (value){
    this.afd.list('recipe').push(value)
  }

  getAllRecipes(){
    return this.afd.list('recipe').snapshotChanges().pipe(map((val)=>{
      return val.map((action: SnapshotAction<any>) => {
        const $key = action.payload.key;
        const data = {$key, ...action.payload.val()};
        return data;
      })
    }))
  }

  getRecipe(recipeId){
    return this.afd.object('recipe/'+recipeId).snapshotChanges().pipe(
      map((action: SnapshotAction<any>) => {
          const $key = action.payload.key;
          const data = { $key, ...action.payload.val() };
          return data;
      }))
  }
}
