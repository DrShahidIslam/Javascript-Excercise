list = ["bhai", "Aapi", "Bhabi"];
console.log("You are invited for a dinner to my house " + list[0]);
console.log("You are most welcome to a dinner at my house " + list[1]);
console.log("I would like to invite you for a dinner at my house " + list[2]);
console.log(list[2] + " could not make it to the dinner.");
new_list = list.splice(2, 1, "Uncle");
console.log("You are invited for a dinner to my house " + list[0]);
console.log("You are most welcome to a dinner at my house " + list[1]);
console.log("I would like to invite you for a dinner at my house " + list[2]);