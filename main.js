import { Juego } from "./scripts/juego.js";
import { Area, Escena, ManejadorDeDialogos, ManejadorDeEscenas, ManejadorDeItems, ManejadorDeFlags, Item, Objeto, Flag } from "./scripts/utilidades.js";
import { Dialogo } from "./scripts/visual.js";

let juego = new Juego(1200, 900);

let area = new Area(437, 333, 633, 734);
let objeto1 = new Objeto(area, juego, 
    function() {
        let flag = juego.manejadorDeFlags.getFlag(0);
        if (flag.activa) {
            let dialogo = juego.manejadorDeDialogos.getDialogo(1);
            dialogo.mostrar();
            flag.desactivar();
        } else {
            let llave = juego.manejadorDeItems.getItem(0);
            juego.jugador.añadirItem(llave);
        }
    }
);

let objeto2 = new Objeto(new Area(874, 340, 1084, 700), juego, 
    function() {
        juego.manejadorDeEscenas.cambiarEscena(1);
    }
)

let escena1 = new Escena(0, "./imagenes/escenas/sala-principal-dia.png", [objeto1, objeto2]);
let escena2 = new Escena(1, "./imagenes/escenas/habitacion-2-dia.png", [objeto1]);
let manejadorDeEscenas = new ManejadorDeEscenas([escena1, escena2]);
juego.manejadorDeEscenas = manejadorDeEscenas;

let dialogo1 = new Dialogo(["hola", "hola 2", "hola 3"]);
let dialogo2 = new Dialogo(["El ascensor no funciona.", "Parece que no funciona..."], "Recepcionista");
let arrayDialogos = [dialogo1, dialogo2];
let manejadorDeDialogos = new ManejadorDeDialogos(arrayDialogos);
juego.manejadorDeDialogos = manejadorDeDialogos;


let flag1 = new Flag(0, true); // Si esta activada, el dialogo salta. Esta flag es para que no salte mas dialogo del ascensor
let flag2 = new Flag(1);
let manejadorDeFlags = new ManejadorDeFlags([flag1, flag2]);
juego.manejadorDeFlags = manejadorDeFlags;

juego.manejadorDeItems = new ManejadorDeItems(
    [
        new Item(0, "./imagenes/graficos/llave.png"),
        new Item(1, "./imagenes/graficos/gafas.png"),
        new Item(2, "./imagenes/graficos/caja.png"),
        new Item(3, "./imagenes/graficos/movil.png"),
        new Item(4, "./imagenes/graficos/hoja-contras.png")
    ]
);

juego.empezar();