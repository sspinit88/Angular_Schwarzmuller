import { IngredientModel } from "../shared/ingredient.model";

export class RecepiesModal {
  public name: string;
  public discription: string;
  public imagePath: string;
  public ingredients: IngredientModel[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: IngredientModel[],
  ) {
    this.name = name;
    this.discription = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
