export abstract class Melon {
  public weight: number;
  public melonSort: string;

  constructor(weight: number, melonSort: string) {
    this.weight = weight;
    this.melonSort = melonSort;
  }

  toString() {}
}

class Watermelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }

  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString() {
    return `Element: Water\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`;
  }
}

class Firemelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString() {
    return `Element: Fire\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`;
  }
}

class Earthmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString() {
    return `Element: Earth\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`;
  }
}

class Airmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
  }
  get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  toString() {
    return `Element: Air\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`;
  }
}

class Melolemonmelon extends Watermelon {
  private elements = ["Fire", "Earth", "Air", "Water"];
  private currentIndex: number = 0;


  get element(): string {
    return this.elements[this.currentIndex];
  }
  morph() {
    this.currentIndex = (this.currentIndex + 1) % this.elements.length;
  }

  override toString(): string {
    return `Element: ${this.element}\nSort: ${this.melonSort}\nElement index: ${this.elementIndex}`;
  }
}
// let test : Melon = new Melon(100, "Test");
// //Throws error

let watermelon: Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

let melon = new Melolemonmelon(10, 'Mega')
melon.morph()
console.log(melon.toString())
melon.morph()
console.log(melon.toString())
melon.morph()
console.log(melon.toString())


// Element: Water
// Sort: Kingsize
// Element Index: 100
