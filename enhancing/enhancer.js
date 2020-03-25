module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  validateItem(item);
  if (item.enhancement < 20) {
    item.enhancement++
  }
  return { ...item };
}

function fail(item) {
  validateItem(item);
  if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1;
  }
  if (item.enhancement > 15) {
    item.durability = item.durability - 10;
  }
  else {
    item.durability = item.durability - 5;
  }
  return { ...item };
}

function repair(item) {
  validateItem(item);
  item.durability = 100;
  return { ...item };
}

function get(item) {
  validateItem(item);
  return { ...item };
}


function validateItem(item) {
  if (!item.name || item.name === '') {
    throw new Error("Item must have a name.")
  }
  else if ( typeof(item.durability) !== 'number' || item.durability < 0 || item.durability > 100) {
    throw new Error("Item must have a number (0 to 100) to indicate durability.")
  }
  else if ( typeof(item.enhancement) !== 'number' || item.enhancement < 0 || item.enhancement > 20) {
    throw new Error("Item must have a number (0 to 20) to indicate enhancement level.")
  }
}