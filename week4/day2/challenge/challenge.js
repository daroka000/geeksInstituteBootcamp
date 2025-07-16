const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   //-------------
const arr= [];
gameInfo.forEach(names =>{
    arr.push(`${names.username} !`)
   });
   console.log(arr);
//-------------
const scorebigger=[];
gameInfo.forEach(player =>{
    if (player.score > 5){
        scorebigger.push(player.username)
    }
});
console.log(scorebigger)
//------------
const totalscore =[];
gameInfo.forEach(total =>{
    totalscore.push(total.score)
});
const sum = totalscore.reduce((a, b) => a + b, 0);
console.log(`total of all scores :${sum}`);



