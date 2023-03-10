const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let listaTareas = [];

function agregarTarea(indicador, descripcion, estado) {
    let tareaNueva = {
        indicador,
        descripcion,
        estado
    };

    listaTareas.push(tareaNueva);
    console.log('Tarea añadida correctamente');
}  

function eliminarTarea(indicador) {
    listaTareas = listaTareas.filter((tarea) => tarea.indicador !== indicador);
    console.log('Tarea eliminada correctamente');
}

function completarTarea(indicador) {
    listaTareas.map((tarea) => {
        if (tarea.indicador === indicador) {
            tarea.estado = true;
        }
        return tarea;
    });
    console.log('Tarea completada');
}

function mostrarLista(){

    if (listaTareas.length === 0) {
        console.log('La lista está vacía')   
    }
    console.log(listaTareas)
}

function iniciarPrograma() {
    readline.question(`Digite una opción según sea el caso: 
    1: Añadir tarea
    2: Eliminar tarea
    3: Completar tarea
    4: Mostrar lista
    salir: Finalizar programa 
==> `, (opcion) => {
        opcion = opcion.trim().toLowerCase();

        switch (opcion) {

            case '1':
                console.log('------- Añadir tarea -------');
                readline.question('Digite el indicador de la tarea: ', (indicador) => {
                    readline.question('Digite la descripción de la tarea: ', (descripcion) => {
                        agregarTarea(indicador, descripcion, false);
                        console.log(listaTareas);
                        iniciarPrograma();
                    });
                });
                break;

            case '2':
                console.log('------- Eliminar tarea -------');
                readline.question('Digite el indicador de la tarea a eliminar: ', (indicador) => {
                    eliminarTarea(indicador);
                    console.log('Tarea eliminada correctamente');
                    console.log(listaTareas);
                    iniciarPrograma();
                });
                break;

            case '3':
                console.log('------- Completar tarea -------');
                readline.question('Digite el indicador de la tarea a completar: ', (indicador) => {
                    completarTarea(indicador);
                    console.log('Tarea completada correctamente');
                    console.log(listaTareas);
                    iniciarPrograma();
                });
                break;

            case '4':
                console.log('------- Lista de tareas -------');
                    mostrarLista();
                    iniciarPrograma();
                break;

            case 'salir':
                readline.close();
                break;

            default:
                console.log('Opción no válida');
                iniciarPrograma();
        }
    });
}

iniciarPrograma();
