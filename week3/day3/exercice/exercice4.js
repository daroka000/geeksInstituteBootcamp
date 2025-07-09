function hotelCost() {
    let nights;

    while (true) {
        nights = prompt("How many nights would you like to stay at the hotel?");
        nights = Number(nights);

        if (!isNaN(nights) && nights > 0) {
            break;
        } else {
            alert("Please enter a valid number of nights.");
        }
    }

    const costPerNight = 140;
    const total = costPerNight * nights;
    return total;
}

const hotel = hotelCost();
console.log("hotel cost: " + hotel);


function planeRideCost() {
    let location;

    while (true) {
        location = prompt("What is your destination?");
        if (location && isNaN(location)) {
            location = location.trim().toLowerCase();
            break;
        } else {
            alert("Please enter a valid destination.");
        }
    }

    if (location === "london") {
        return 183;
    } else if (location === "paris") {
        return 220;
    } else {
        return 300;
    }
}

const flight = planeRideCost();
console.log("plane ride cost: " + flight);



function rentalCarCost(){
    let car ;
    while (true) {
        car = prompt("how many number of days would you like to rent the car?");
        car = Number(car);

        if (!isNaN(car) && car > 0) {
            break;
        } 
        else {
            alert("Please enter a valid number "+
                "how many number of days would you like to rent the car? "
            );
        }
        const price = 40;
        let total;
    
        if (car > 10) {
            total = car * price * 0.95; 
        } else {
            total = car * price;
        }
    
        return total;

    }}
    const rental = rentalCarCost();
console.log("Total car rental cost: " + rental);

function totalVacationCost() {
    const hotel = hotelCost();
    const plane = planeRideCost();
    const car = rentalCarCost();

    console.log(`the car cost: ${car}, the hotel cost: ${hotel}, the plane tickets cost:${plane}`);
    const total = hotel + plane + car;
    return total;
}

console.log("Total vacation cost: " + totalVacationCost());


//////////////////////code pour bonus -----------------
function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(location) {
    location = location.trim().toLowerCase();
    if (location === "london") return 183;
    else if (location === "paris") return 220;
    else return 300;
}

function rentalCarCost(days) {
    let total = days * 40;
    if (days > 10) total *= 0.95;
    return total;
}

function totalVacationCost() {
    let nights, location, days;

    while (true) {
        nights = prompt("How many nights would you like to stay at the hotel?");
        nights = Number(nights);
        if (!isNaN(nights) && nights > 0) break;
        alert("Please enter a valid number of nights.");
    }

    while (true) {
        location = prompt("What is your destination?");
        if (location && isNaN(location)) break;
        alert("Please enter a valid destination.");
    }

   
    while (true) {
        days = prompt("how many days would you like to rent the car?");
        days = Number(days);
        if (!isNaN(days) && days > 0) break;
        alert("please enter a valid number of days");
    }

    const hotel = hotelCost(nights);
    const plane = planeRideCost(location);
    const car = rentalCarCost(days);

    console.log(`the car cost: ${car}, the hotel cost: ${hotel}, the plane tickets cost: ${plane}`);
    const total = hotel + plane + car;
    return total;
}

console.log("Total vacation cost: " + totalVacationCost());














