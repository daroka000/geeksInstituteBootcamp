const infocontainer = document.getElementById('info-container');
const button = document.getElementById('button');
const dev = document.getElementById('wrapper');
const namee = document.getElementById('name');
const height = document.getElementById('height');
const gender = document.getElementById('gender');
const birthyear = document.getElementById('birth-year');
const homeworld = document.getElementById('home-world');

async function getelement(e) {
    try {
        const randomId = Math.floor(Math.random() * 83) + 1;
        
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data = await response.json();
        const character = data.result.properties; 
        
        const homeworldUrl = character.homeworld;
        const homeworldResponse = await fetch(homeworldUrl);
        if (!homeworldResponse.ok) {
            throw new Error(`HTTP error! status: ${homeworldResponse.status}`);
        }
        const homeworldData = await homeworldResponse.json();
        
       
        namee.textContent = `Name: ${character.name}`;
        height.textContent = `Height: ${character.height}`;
        gender.textContent = `Gender: ${character.gender}`;
        birthyear.textContent = `Birth Year: ${character.birth_year}`;
        homeworld.textContent = `Homeworld: ${homeworldData.result.properties.name}`;
        
    } catch (error) {
        console.error("Error:", error);
    }
};

button.addEventListener('click', getelement);
