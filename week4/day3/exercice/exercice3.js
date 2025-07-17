const users = { user1: 18273, user2: 92833, user3: 90315 }
const keys =Object.entries(users);
console.log(keys);
//-----
const updated = keys.map(([key, value]) => [key, value * 2]);
console.log(updated);