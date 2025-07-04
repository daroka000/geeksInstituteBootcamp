const list_colors =["red","orange","yellow","green","brown"];
for (let i = 0; i < list_colors.length; i++) {
    console.log(`My #${i + 1}  choice is :${list_colors[i]}`);
}

console.log("------bonus---")
const colors = ["blue", "red", "green", "black", "purple"];

function getSuffix(n) {
  if (n === 1) return "st";
  if (n === 2) return "nd";
  if (n === 3) return "rd";
  return "th";
}

for (let i = 0; i < colors.length; i++) {
  let position = i + 1;
  let suffix = getSuffix(position);
  console.log(`My ${position}${suffix} choice is ${colors[i]}`);
}
