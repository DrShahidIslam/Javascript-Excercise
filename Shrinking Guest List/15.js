list = ["bhai", "Aapi", "Bhabi"];
console.log("You are invited for a dinner to my house " + list[0]);
console.log("You are most welcome to a dinner at my house " + list[1]);
console.log("I would like to invite you for a dinner at my house " + list[2]);
console.log(list[2] + " could not make it to the dinner.");
list.splice(2, 1, "Uncle");
console.log("You are invited for a dinner to my house " + list[0]);
console.log("You are most welcome to a dinner at my house " + list[1]);
console.log("I would like to invite you for a dinner at my house " + list[2]);
console.log("Hello guys, there is a good news!. I have got a bigger table for the dinner. This means we can have more guests tonight");
list.unshift("Aunty");
list.splice(1, 0, "Neighbour");
list.push("Friend");
console.log("You are invited for a dinner to my house " + list[0]);
console.log("You are most welcome to a dinner at my house " + list[1]);
console.log("I would like to invite you for a dinner at my house " + list[2]);
console.log("You are invited for a dinner to my house " + list[3]);
console.log("You are most welcome to a dinner at my house " + list[4]);
console.log("I would like to invite you for a dinner at my house " + list[5]);
console.log("I am sorry guys, the dinner table could not arrive on time. So i can invite only two people for dinner tonight");
console.log(list.pop() + " sorry i need to remove you from the list");
console.log(list.pop() + " sorry i need to remove you from the list");
console.log(list.pop() + " sorry i need to remove you from the list");
console.log(list.pop() + " sorry i need to remove you from the list");
console.log("You are still invited for a dinner to my house " + list[0]);
console.log("You are still most welcome to a dinner at my house " + list[1]);
list.pop();
delete list[0];
console.log(list);