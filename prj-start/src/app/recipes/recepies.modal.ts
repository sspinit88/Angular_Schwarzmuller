export class RecepiesModal {
  public name: string;
  public discription: string;
  public imagePath: string;

  constructor(
    name: string,
    desc: string,
    imagePath: string,
  ) {
    this.name = name;
    this.discription = desc;
    this.imagePath = imagePath;
  }
}
