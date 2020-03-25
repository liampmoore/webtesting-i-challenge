module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  validateItem(item);
  let {name, enhancement, durability} = item;
  if (enhancement < 20) {
    enhancement++
  }
  return { name, enhancement, durability };
}

function fail(item) {
  validateItem(item);
  let {name, enhancement, durability} = item;
  if (enhancement > 16) {
    enhancement = enhancement - 1;
  }
  if (enhancement > 15) {
    durability = durability - 10;
  }
  else {
    durability = durability - 5;
  }
  return { name, enhancement, durability };
}

function repair(item) {
  validateItem(item);
  let { durability } = item;
  durability = 100;
  return { ...item, durability };
}

function get(item) {
  validateItem(item);
  const regex = /\[\+\S+\]/i
  let {name, enhancement, durability} = item;
  if (enhancement > 0) {
    name = regex.test(name) ? name.replace(regex, `[+${enhancement}]`) : name + `[+${enhancement}]`
  }
  return { name, enhancement, durability };
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