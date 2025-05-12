async function getCountries(){
    let url="https://restcountries.com/v3.1/all";
    let countries = await fetch(url);
    let countries_arr= await countries.json();
    console.log(countries_arr);
    return countries_arr;
}
catch(e){

alert("error while fatching");
console.log(e);
}
getCountries();