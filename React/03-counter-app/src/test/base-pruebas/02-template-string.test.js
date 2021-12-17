import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo, debe retornar hola Santiago', () => {
        const nombre ='Santiago';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe('Hola' + nombre);
    })
    
})
