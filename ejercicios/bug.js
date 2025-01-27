const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    /* Se ha quitaddo el signo de igual en el for, ya que 
        al acceder al indice i en la ultima iteraccion devolveria un fuera de rango, dando
        como resultado un undefined  dando error en la variable de sumaTotal
    */
    for (let i = 0; i <= numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);
