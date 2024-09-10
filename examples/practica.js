
const calcularPromedio = (numeros) => {
    let sumaTotal = 0;
    for (let i = 0; i < numeros.length; i++) { // Cambiado a i < numeros.length
        sumaTotal += numeros[i];
    }
    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
console.log(promedioNumeros); // Esto debería mostrar 3


/*
const buildPath = (input) => {
  // recuperamos la sublista resultante de quitar el ultimo elemento del input y unimos los elementos en una cadena de caracteres metiendo '/' entre los elementos
  const inputPath = input.slice(0, -1).join('/');
  // recuperamos el ultimo elemento del input
  const inputExtension = input.slice(-1);
  // unimos el path y la extension con un '.'
  const inputPathExtension = `${inputPath}.${inputExtension}`; // inputPath + '.' + inputExtension
  return inputPathExtension;
}; */