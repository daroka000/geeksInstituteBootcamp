const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
  const i = index + 1;
  const suffix = (i === 1) ? "st" 
               : (i === 2) ? "nd" 
               : (i === 3) ? "rd" 
               : "th";

  console.log(`${i}${suffix} choice is ${color}.`);
});
