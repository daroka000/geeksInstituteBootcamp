const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((Number,index)=>{
    console.log(`${index+1}#choice is :${Number}`)
    



});
if (colors.some(color => color === "Violet")) {
    console.log("Yeah");
  } else {
    console.log("No...");
  }