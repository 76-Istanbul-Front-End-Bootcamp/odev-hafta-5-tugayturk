import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */


const firstButton = document.querySelector("#populationBigger")
firstButton.addEventListener("click", () => {
    let bt500 = data.filter((city) => city.population > 500000)
    createTableElements(bt500, "allcities");
    createTableElements([], "singlecity");
});
//second green button
const secondButton = document.querySelector("#landAreaLess")
secondButton.addEventListener("click", () => {
    let lt1000 = data.filter((city) => city.landArea < 1000);
    createTableElements(lt1000, "allcities");
    createTableElements([], "singlecity")
})
//blue buttons

//isPopulationLess
const thirdButton = document.querySelector("#isPopulationLess")
thirdButton.addEventListener("click", () => {
    let populationLess = data.some((less) => less.population < 100000)
    if (populationLess) {
        alert("YES");
    } else {
        alert("NO");
    }
}
)


//isLandBigger
const fourthButton = document.querySelector("#isLandBigger")
fourthButton.addEventListener("click", () => {
    let landBigger = data.every((city) => city.landArea > 100);
    if (landBigger) {
        alert("YES");

    } else {
        alert("No");
    }
});

//Select box

const cityName = data.map(cityName => cityName.name);
const citySelect = document.querySelector(".custom-select");
cityName.forEach((element)=>{
    
    const cityCreate = document.createElement("option");
    cityCreate.setAttribute("value",element);
    cityCreate.textContent= element;
    citySelect.appendChild(cityCreate);
})

citySelect.addEventListener("change", (e) => {
    const selectCities = data.filter(cities => e.target.value === cities.name);

    createTableElements(selectCities, "singlecity")
})