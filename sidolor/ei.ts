interface SuperheroGadgets {
  [key: string]: string;
}

class Superhero {
  private gadgets: SuperheroGadgets;

  constructor() {
    this.gadgets = {};
  }

  addGadget(hero: string, gadget: string): void {
    this.gadgets[hero] = gadget;
  }

  getGadget(hero: string): string {
    return this.gadgets[hero];
  }
}

// Usage
const heroGadgets = new Superhero();
heroGadgets.addGadget('Spiderman', 'spider-net');

console.log(`Gadget for Spiderman: ${heroGadgets.getGadget('Spiderman')}`);
