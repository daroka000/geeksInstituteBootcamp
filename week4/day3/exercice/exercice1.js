const person = {
    names: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {names, location: {country, city, coordinates: [lat1, lat2]}} = person;

console.log(`I am ${names} from ${city}, ${country}. Latitude(${lat1}), Longitude(${lat2})`);
//output is :I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)