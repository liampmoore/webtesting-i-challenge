module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  return { ...item };
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  validateItem(item);
  item.durability = 100;
  return { ...item };
}

function get(item) {
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