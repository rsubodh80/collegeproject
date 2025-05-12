let vehicles=['car','bike','scooter','train','truck','bus'];
vehicles[0]="Bicycle"; //assign value to an index
vehicles.push('Aeroplane');//assign value to last index
vehicles.unshift('Helicopter');//assign value to first index
vehicles.length;//length of array
vehicles.forEach(vehicle=>{console.log(vehicle)});
let vehiclesCapital=vehicles.map(vehicle=>{return vehicle.toUpperCase()});
console.log(vehiclesCapital);
let vehicle3=vehicles.splice(2,2);
console.log

