const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// 1
const initials = names.map(name => name[0]);

// 2
initials.sort();

// 3
const societyName = initials.join("");

console.log(societyName); 
