
const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not o la  negación');
console.log(true); // true
console.log(!true); // False
console.log(!false); // true


console.log(!regresaFalse()); // true



console.warn('And');
console.log(true && true); // true
console.log(true && !false); // false

console.log('4 Condiciones:', true && true && true && false); // false

console.log('=============');
console.log(regresaFalse() && regresaTrue()); // false
console.log(regresaTrue() && regresaFalse()); // false

console.warn('OR'); // true
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log('4 Condiciones:', true || true || true || false); // true


console.log('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && 'Hola  Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalse && true;
const a3 = soyFalse || 'Ya no soy false';
const a4 = soyFalse || soyUndefined || soyNull || 'Ya no soy false de nuevo';
const a5 = soyFalse || soyUndefined || regresaTrue() || 'Ya no soy false de nuevo';

console.log(a1, a2, a3, a4, a5);