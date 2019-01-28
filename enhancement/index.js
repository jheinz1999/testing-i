const ItemTypes = require('../items/ItemTypes');

const succeed = item => {

  let enhanced = Object.create(item);

  enhanced.enhancement++;

  console.log('Enhancement successful!');

  return enhanced;

}

const fail = item => {

  let failed = Object.create(item);

  if (failed.enhancement <= 14) {

    failed.durability -= 5;

  }

  if (failed.enhancement > 14) {

    failed.durability -= 10;

  }

  if (failed.enhancement > 16) {

    failed.enhancement--;

  }

  console.log('Enhancement failed!');

  return failed;

}

const enhance = item => {

  if (item.durability < 25 && item.enhancement <= 14)
    return item;

  if (item.durability < 10 && item.enhancement >= 15)
    return item;

  if (item.type === ItemTypes.ARMOR && item.enhancement <= 5)
    return succeed(item);

  if (item.type === ItemTypes.WEAPON && item.enhancement <= 7)
    return succeed(item);

  const willEnhance = Math.random() > 0.5;

  if (willEnhance)
    return succeed(item);

  return fail(item);

}

module.exports = {

  succeed,
  fail,
  enhance

}
