export interface IRecipe{
    nameofChef: string;
    nameofDish: string;
    typeofMeal: string;
    serves: string;
    ingredients: Ingredients[];
    description: string;
    image: string;
    createdTs: number;
}

export interface Ingredients{
    nameofIngredient: string;
    quantity: string;
}
