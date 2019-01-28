const ItemTypes = require('./ItemTypes');

const enhancementMap = {
  '16': 'PRI',
  '17': 'DUO',
  '18': 'TRI',
  '19': 'TET',
  '20': 'PEN',
}

class Item {

  constructor(name, type, durability = 100, enhancement = 0) {

    if (type !== ItemTypes.WEAPON && type !== ItemTypes.ARMOR) {

      throw new Error('Item type must be weapon or armor!');

    }

    this.nameVal = name;
    this.type = type;
    this.durabilityVal = durability;
    this.enhancementVal = enhancement;

  }

  get name() {

    let prefix = '';

    if (this.enhancement !== 0 && this.enhancement <= 15)
      prefix = `[+${this.enhancement}] `;

    else if (this.enhancement > 15)
      prefix = `[${enhancementMap['' + this.enhancement]}] `;

    return prefix + this.nameVal;

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
