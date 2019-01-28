const Item = require('./index');
const ItemTypes = require('./ItemTypes');

describe('item constructor', () => {

  it('should produce name, type, durability, and enhancement', () => {

    const item = new Item('item 1', ItemTypes.WEAPON);

    expect(item.name).not.toBeNull();
    expect(typeof item.name === 'string');
    expect(item.type).not.toBeNull();
    expect(typeof item.type === 'string');
    expect(item.durability).not.toBeNull();
    expect(typeof item.durability === 'number');
    expect(item.enhancement).not.toBeNull();
    expect(typeof item.enhancement === 'number');

  });

  it('can only have types of weapon or armor', () => {

    expect(() => {
      const item = new Item('item 1', 'chicken')
    }).toThrow();

  });

  it('starts durability at 100', () => {

    const item = new Item('item 1', ItemTypes.WEAPON);

    expect(item.durability).toEqual(100);

  });

  it('can have a max durability of 100', () => {

    const item = new Item('item 1', ItemTypes.WEAPON);

    item.durability = 121;

    expect(item.durability).toEqual(100);

  });

  it('starts enhancement at zero', () => {

    const item = new Item('item 1', ItemTypes.WEAPON);

    expect(item.enhancement).toEqual(100);

  });

  it('cannot have enhancement greater than 20', () => {

    const item = new Item('item 1', ItemTypes.WEAPON);

    item.enhancement = 25;

    expect(item.enhancement).toEqual(20);

  });

  it('cannot have durability less than 20 when enhancement is between 0 and 14', () => {

    const item = new Item('item 1', ItemTypes.WEAPON, 100, 10);

    item.durability = 2;

    expect(item.durability).toEqual(20);

  });

  it('cannot have durability less than 0 when enhancement is greater than 15', () => {

    const item = new Item('item 1', ItemTypes.WEAPON, 100, 18);

    item.durability = -3;

    expect(item.durability).toEqual(0);

  });

});
