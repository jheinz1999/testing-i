const ItemTypes = require('./ItemTypes');

class Item {

  constructor(name, type, durability = 100, enhancement = 0) {

    if (type !== ItemTypes.WEAPON && type !== ItemTypes.ARMOR) {

      throw new Error('Item type must be weapon or armor!');

    }

    this.name = name;
    this.type = type;
    this.durabilityVal = durability;
    this.enhancementVal = enhancement;

  }

  set durability(value) {

    if (value > 100)
      value = 100;

    if (value < 20 && this.enhancement < 14)
      value = 20;

    if (value < 0 && this.enhancement >= 15)
      value = 0;

    this.durabilityVal = value;

  }

  get durability() {

    return this.durabilityVal;

  }

  set enhancement(value) {

    if (value > 20)
      value = 20;

    this.enhancementVal = value;

  }

  get enhancement() {

    return this.enhancementVal;

  }

}

module.exports = Item;
