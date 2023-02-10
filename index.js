let search_btn = document.querySelector("#search_btn");
let country_inpt = document.querySelector("#country_inpt");
let result = document.querySelector("#result");

search_btn.addEventListener('click', (e) => {
    result.style.display = "inherit";
    // let countyrName = `${country_inpt.value}`;
    console.log(e)

    fetch(`https://restcountries.com/v3.1/name/${country_inpt.value}?fullText=true`)
    .then((resp)=> resp.json())
    .then((data)=>{
        console.log(data[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].capital[0]);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        // console.log(Object.keys(data[0].currencies[0]));
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        
        result.innerHTML =`
            <img src="${data[0].flags.svg}" class="flag_img"/>
            <h2>${data[0].name.common}</h2>
            <p><h3>Continent:</h3>${data[0].continents[0]}</p>
            <p><h3>Population:</h3>${data[0].population}</p>
            <p><h3>Capital:</h3>${data[0].capital[0]}</p>
            <p><h3>Currency:</h3>${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
            <p><h3>Languages:</h3>${Object.values(data[0].languages).toString().split(",").join(", ")}</p>`
        // console.log(data[0].capital[0]);
        // console.log(data);
        console.log(result.innerHTML);
        console.log();
        console.log();
    })
})

search_btn.addEventListener('keypress', function (event) {
    if(event.keyCode == 13) {
      console.log(event);  
        result.style.display = "inherit";
        // let countyrName = `${country_inpt.value}`;
        // console.log(countyrName)
    
        fetch(`https://restcountries.com/v3.1/name/${country_inpt.value}?fullText=true`)
        .then((resp)=> resp.json())
        .then((data)=>{
            console.log(data[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].capital[0]);
            console.log(data[0].name.common);
            console.log(data[0].continents[0]);
            // console.log(Object.keys(data[0].currencies[0]));
            console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
            console.log(Object.values(data[0].languages).toString().split(",").join(", "));
            
            result.innerHTML =`
                <img src="${data[0].flags.svg}" class="flag_img"/>
                <h2>${data[0].name.common}</h2>
                <p><h3>Continent:</h3>${data[0].continents[0]}</p>
                <p><h3>Population:</h3>${data[0].population}</p>
                <p><h3>Capital:</h3>${data[0].capital[0]}</p>
                <p><h3>Currency:</h3>${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
                <p><h3>Languages:</h3>${Object.values(data[0].languages).toString().split(",").join(", ")}</p>`
    
        })
    }

})