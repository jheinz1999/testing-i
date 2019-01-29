const enhancer = require('./index');
const Item = require('../items');
const ItemTypes = require('../items/ItemTypes');

describe('enhancer function', () => {

  it('should repair items with durability less than 100', () => {

    let item = new Item('armor 1', ItemTypes.ARMOR, 33, 13);

    enhancer.repair(item);

    expect(item.durability).toEqual(100);

  })

  describe('on success', () => {

    it('will always enhance armor up to level 5', () => {

      const item = new Item('armor 1', ItemTypes.ARMOR);

      let enhanced = enhancer.enhance(item);

      expect(enhanced.enhancement).toEqual(item.enhancement + 1);

    });

    it('will always enhance weapons up to level 7', () => {

      const item = new Item('weapon 1', ItemTypes.WEAPON);

      let enhanced = enhancer.enhance(item);

      expect(enhanced.enhancement).toEqual(item.enhancement + 1);

    });

  });

  describe('on failure', () => {

    it('will decrease durability by 5 if enhancement is <= 14', () => {

      const item = new Item('item 1', ItemTypes.WEAPON, 100, 13);

      const failed = enhancer.fail(item);

      expect(failed.durability).toEqual(item.durability - 5);

    });

    it('will decrease durability by 10 if enhancement is > 14', () => {

      const item = new Item('item 1', ItemTypes.WEAPON, 100, 16);

      const failed = enhancer.fail(item);

      expect(failed.durability).toEqual(item.durability - 10);

    });

    it('will decrease enhancement by 1 if enhancement fails above level 16', () => {

      const item = new Item('item 1', ItemTypes.WEAPON, 100, 17);

      const failed = enhancer.fail(item);

      expect(failed.enhancement).toEqual(item.enhancement - 1);

    });

    it ('will not enhance if durability is < 25 and enhancement is <= 14', () => {

      const item = new Item('item 1', ItemTypes.WEAPON, 21, 1);

      const failed = enhancer.enhance(item);

      expect(failed).toEqual(item);

    });

    it('will not enhance if durability < 10 and enhancement >= 15', () => {

      const item = new Item('item 1', ItemTypes.WEAPON, 1, 17);

      const failed = enhancer.enhance(item);

      expect(failed).toEqual(item);

    });

  });

});
