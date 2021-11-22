const carros = ['Ford', 'Toyota', 'Honda', 'Yamaha', 'BMW'];

let i = 0;

while (i < carros.length) {
    console.log(carros[i]);
    i++
}
console.warn('Do while');
let j = 0;
do {
    console.log(carros[j]);
    j++;
} while (carros[j]);