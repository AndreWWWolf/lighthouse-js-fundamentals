var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("\nUsing while:")

var list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list])
  list++
}
// Write a for loop that prints out the contents of ingredients:
console.log("\nUsing for:")

for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\nBackwards:")

for (var i = ingredients.length; i >= 0; i--) {
  console.log(ingredients[i]);
}