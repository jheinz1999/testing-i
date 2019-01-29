const enhancer = require('./enhancement');
const Item = require('./items');
const ItemTypes = require('./items/ItemTypes');

const testItem = new Item('Awesome Sword', ItemTypes.WEAPON, 100, 17);

const enhancedTestItem = enhancer.enhance(testItem);

console.log('Updated item: ', enhancedTestItem.name);
