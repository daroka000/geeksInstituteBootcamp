let client = "Betty";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries=()=>{
    groceries.fruits.forEach(fruit => {console.log(fruit)
        
    });
}
displayGroceries()

cloneGroceries=()=>{
    let user=client;
    console.log(`user is :${user}`)

    let shopping=groceries;
    shopping.totalPrice="25$"
    shopping.other.paid=false;
    console.log(shopping)
    
}
cloneGroceries()