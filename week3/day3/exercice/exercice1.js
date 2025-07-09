function displayNumbersDivisible(divisor){
    let sum=0;
    for (let i=0; i<=100;i++) {
        if (i %divisor ===0){
            console.log( i)
            sum += i;
        }
    }
    console.log("SUM :", sum);
}
displayNumbersDivisible(5);


