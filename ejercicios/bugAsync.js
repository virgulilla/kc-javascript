async function obtenerUsuario(id) {
    return new Promise((resolve) => {
        /* setTimeout es una funcion asincrona, por lo tanto convertimos la funcion en asincrona 
        y devolvemos una promesa*/
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, nombre: 'John Doe' });
            }
        }, 2000);
    });
}


(async () => {
    const usuario = await obtenerUsuario(1);
    console.log(usuario);
})();