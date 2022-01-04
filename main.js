import { Juego } from "./scripts/juego.js";
import { Area, Escena, ManejadorDeDialogos, ManejadorDeEscenas, ManejadorDeItems, Item, Objeto, ManejadorDeFlags, Flag } from "./scripts/utilidades.js";
import { Dialogo } from "./scripts/visual.js";

let juego = new Juego(1200, 900);

let area = new Area(437, 333, 633, 734);
let movil = new Objeto(new Area(1487, 335, 1537, 385), juego,
    function () {

    }
);
let objeto1 = new Objeto(area, juego,
    function () {
        let flag = juego.manejadorDeFlags.getFlag(0);
        if (flag.activa) {
            let dialogo = juego.manejadorDeDialogos.getDialogo(1);
            dialogo.mostrar();
            flag.desactivar();
        }
    }
);
let objeto2 = new Objeto(new Area(874, 340, 1084, 700), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(1);
        let flag = juego.manejadorDeFlags.getFlag(1)
        if (flag.activa) {
            let dialogo = juego.manejadorDeDialogos.getDialogo(8);
            dialogo.mostrar();
            flag.desactivar();
            let caja = juego.manejadorDeItems.getItem(2)
            juego.jugador.añadirItem(caja)
        }
    }
 )

let objeto3 = new Objeto(new Area(835, 349, 1021, 692), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(2);
    }
)
let objetoPuertaHab3 = new Objeto(new Area(1409, 182, 1544, 819), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(7);
    }
);
let puertaHabitacion1 = new Objeto(new Area(354, 162, 506, 800), juego,
    function() {
        juego.manejadorDeEscenas.cambiarEscena(3);
    }
)
let puertaPasillo1 = new Objeto (new Area(1334, 350, 1501, 885), juego,
    function() {
        juego.manejadorDeEscenas.cambiarEscena(4)
    }
)
let puertaCafeteria = new Objeto (new Area(928, 448, 980, 540), juego,
    function() {
        juego.manejadorDeEscenas.cambiarEscena(5)
        let flag = juego.manejadorDeFlags.getFlag(2)
        if (flag.activa){
            let dialogo = juego.manejadorDeDialogos.getDialogo(9);
            dialogo.mostrar();
            let quitarCaja = juego.manejadorDeItems.getItem(2)
            juego.jugador.quitarItem(quitarCaja)
            flag.desactivar();
        }
    }
)
let puertaPasillo3 = new Objeto (new Area(1337, 402, 1449, 639), juego,
    function() {
        juego.manejadorDeEscenas.cambiarEscena(6)
    }
)
let flechaHabitacion2 = new Objeto (new Area(877, 777, 1021, 906), juego,
    function() {
        juego.manejadorDeEscenas.cambiarEscena(0)
    }
)
let flechaHabitacion1 = new Objeto (new Area(877, 777, 1021, 906), juego,
    function() {
        juego.manejadorDeEscenas.cambiarEscena(1)
    }
)
let flechaPasillo1 = new Objeto (new Area(877, 777, 1021, 906), juego,
    function() {
        juego.manejadorDeEscenas.cambiarEscena(3)
    }
)
let flechaCajaFuerte = new Objeto (new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(1)
    }
)
let flechaCafeteria = new Objeto (new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(4)
    }
)
let flechaPasillo3 = new Objeto (new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(9)
    }
)
let puertaCafeteria2 = new Objeto (new Area(883, 437, 1009, 599), juego,
    function() {
        juego.manejadorDeEscenas.cambiarEscena(5)
        let flag = juego.manejadorDeFlags.getFlag(2)
        if (flag.activa){
            let dialogo = juego.manejadorDeDialogos.getDialogo(9);
            dialogo.mostrar();
            let quitarCaja = juego.manejadorDeItems.getItem(2)
            juego.jugador.quitarItem(quitarCaja)
            flag.desactivar();
        }
    }
)
let recepcion = new Objeto(new Area(1070, 388, 1366, 788), juego, 
    function() {}
);
let objetoPuertaPas2a = new Objeto(new Area(434, 297, 563, 729), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(8);
    }
);
let objetoPuertaPas2b = new Objeto(new Area(904, 462, 995, 577), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(9);
    }
);
let objetoPuertaPas3 = new Objeto(new Area(827, 450, 845, 572), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(6);
    }
);
let objetoPuertaSalaJefe = new Objeto(new Area(925, 443, 999, 565), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(10);
    }
);
let objetoFlechaSalaJefe = new Objeto(new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(9);
    }
);
let objetoFlechaPas2b = new Objeto(new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(8);
    }
);
let objetoFlechaPas2a = new Objeto(new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(7);
    }
);
let objetoFlechaHab3 = new Objeto(new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(1);
    }
);
let objetoFlechaPas3 = new Objeto(new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(9);
    }
);
let objetoPuertaCubiculo1 = new Objeto(new Area(560, 329, 713, 873), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(11);
    }
);
let objetoPuertaCubiculo2 = new Objeto(new Area(824, 434, 884, 612), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(12);
    }
);
let objetoPuertaCubiculo3 = new Objeto(new Area(567, 311, 761, 849), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(13);
    }
);
let objetoPuertaCubiculo4 = new Objeto(new Area(1102, 377, 1238, 888), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(14);
    }
);
let objetoPuertaCubiculo5 = new Objeto(new Area(1006, 456, 1037, 614), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(15);
    }
);
let objetoPuertaCubiculo6 = new Objeto(new Area(1129, 318, 1319, 860), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(16);
    }
);
let objetoFlechaCubiculoPas2a = new Objeto(new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(8);
    }
);
let objetoFlechaCubiculoPas2b = new Objeto(new Area(877, 777, 1021, 906), juego,
    function () {
        juego.manejadorDeEscenas.cambiarEscena(9);
    }
);
let Torre1 = new Objeto(new Area(850, 401, 1195, 563), juego,
    function () {
        juego.manejadorDeDialogos.getDialogo(2).mostrar();
    }
);
let empleadoCub2 = new Objeto(new Area(853, 416, 1036, 775), juego, 
    function () {
        juego.manejadorDeDialogos.getDialogo(3).mostrar();
    }
);
let empleadoCub6 = new Objeto(new Area(867, 507, 1021, 786), juego,
    function () {
        juego.manejadorDeDialogos.getDialogo(4).mostrar();
    }
);
let montonTrabajo = new Objeto(new Area(724, 474, 877, 564), juego, 
    function () {
        juego.manejadorDeDialogos.getDialogo(5).mostrar();
    }
);
let pensador = new Objeto(new Area(920, 361, 1081, 776), juego,
    function () {
        juego.manejadorDeDialogos.getDialogo(6).mostrar();
    }
);
let archivos = new Objeto(new Area(1401, 145, 1535, 251), juego, 
    function () {
        juego.manejadorDeDialogos.getDialogo(7).mostrar();
    }
);
let gafas = new Objeto(new Area(585, 672, 700, 778), juego, 
    function () {
        let flag = juego.manejadorDeFlags.getFlag(3)
        if (flag.activa){
            if (flag.activa) {
                let dialogo = juego.manejadorDeDialogos.getDialogo(10);
                dialogo.mostrar();
                flag.desactivar();
           }
           let gafas = juego.manejadorDeItems.getItem(1)
                juego.jugador.añadirItem(gafas)
        }
    }
);

let escena1 = new Escena(0, "./imagenes/escenas/sala-principal-dia.png", [objeto1, objeto2]);
let escena2 = new Escena(1, "./imagenes/escenas/habitacion-2-dia.png", [objeto3, objetoPuertaHab3,puertaHabitacion1,flechaHabitacion2, recepcion]);
let escena3 = new Escena(2, "./imagenes/escenas/sala-caja-fuerte-dia.png", [flechaCajaFuerte])
let escena4 = new Escena(3, "./imagenes/escenas/habitacion-1-dia.png",[puertaPasillo1,flechaHabitacion1])
let escena5 = new Escena(4, "./imagenes/escenas/pasillo-1-dia.png",[puertaCafeteria, flechaPasillo1])
let escena6 = new Escena(5, "./imagenes/escenas/cafeteria-dia.png",[puertaPasillo3,flechaCafeteria, gafas])
let escena7 = new Escena(6, "./imagenes/escenas/pasillo-3-dia.png",[flechaPasillo3,puertaCafeteria2]);
let escenaHab3 = new Escena(7, "./imagenes/escenas/habitacion-3-dia.png", [objetoPuertaPas2a, objetoFlechaHab3]);
let escenaPas2a = new Escena(8, "./imagenes/escenas/pasillo-2a-dia.png", [objetoPuertaPas2b, objetoFlechaPas2a, objetoPuertaCubiculo1, objetoPuertaCubiculo2, objetoPuertaCubiculo4, objetoPuertaCubiculo5]);
let escenaPas2b = new Escena(9, "./imagenes/escenas/pasillo-2b-dia-con-puerta.png", [objetoPuertaPas3, objetoPuertaSalaJefe, objetoFlechaPas2b, objetoPuertaCubiculo3, objetoPuertaCubiculo6]);
let escenaSalaJefe = new Escena(10, "./imagenes/escenas/sala-jefe-dia.png", [objetoFlechaSalaJefe]);
let escenaCubiculo1 = new Escena(11, "./imagenes/escenas/cubiculo-1-dia.png", [objetoFlechaCubiculoPas2a, Torre1]);
let escenaCubiculo2 = new Escena(12, "./imagenes/escenas/cubiculo-2-dia.png", [objetoFlechaCubiculoPas2a, empleadoCub2]);
let escenaCubiculo3 = new Escena(13, "./imagenes/escenas/cubiculo-3-dia.png", [objetoFlechaCubiculoPas2b]);
let escenaCubiculo4 = new Escena(14, "./imagenes/escenas/cubiculo-4-dia.png", [objetoFlechaCubiculoPas2a, montonTrabajo, empleadoCub6]);
let escenaCubiculo5 = new Escena(15, "./imagenes/escenas/cubiculo-5-dia.png", [objetoFlechaCubiculoPas2a, pensador, archivos]);
let escenaCubiculo6 = new Escena(16, "./imagenes/escenas/cubiculo-6-dia.png", [objetoFlechaCubiculoPas2b]);
let mapa = new Escena();
let manejadorDeEscenas = new ManejadorDeEscenas([escena1, escena2, escena3, escena4, escena5, escena6, escena7, escenaHab3, escenaPas2a, escenaPas2b, escenaSalaJefe, escenaCubiculo1, escenaCubiculo2, escenaCubiculo3, escenaCubiculo4, escenaCubiculo5, escenaCubiculo6]);
juego.manejadorDeEscenas = manejadorDeEscenas;

let dialogo1 = new Dialogo(["hola", "hola 2", "hola 3"]);
let dialogo2 = new Dialogo(["Esto no creo que funcione."], "");
let dialogoTorreApagada = new Dialogo(["Está apagado"]);
let dialogoEmpleado = new Dialogo(["Será mejor no molestar"]);
let dialogoDormido = new Dialogo(["Está dormido y exausto"]);
let dialogoTrabajo = new Dialogo(["Un \"montón\" de trabajo"]);
let dialogoPensador = new Dialogo(["Déjame en paz", "Estoy pensando en la siguiente gran jugada de la empesa"], "Empleado");
let dialogoArchivos = new Dialogo(["Un montón de libros acerca del Sistema Operativo \"Gates\", por Bill Windows", "Inútiles en mi opinión"]);
let dialogo3 = new Dialogo(["Buen día, [Nombre de jugador]. Tengo que pedirle algo, dele esta caja a Pedro por favor *Le da una caja*. Se encuentra actualmente en la cafetería."], "Recepcionista")
let dialogo4 = new Dialogo(["Ah, muchas gracias [Nombre de jugador]. Llevaba tiempo esperándo la caja."], "Pedro")
let conseguirGafas = new Dialogo(["Hm, qué es esto? *Se encuentra con las gafas, que en el título pone \“Nuevas gafas visionarias, esta vez en HD\".*", "Tiene pinta de ser algún cacharro de juguete, pero me las voy a probar."],"")
let arrayDialogos = [dialogo1, dialogo2, dialogoTorreApagada, dialogoEmpleado, dialogoDormido, dialogoTrabajo, dialogoPensador, dialogoArchivos, dialogo3, dialogo4, conseguirGafas];
let manejadorDeDialogos = new ManejadorDeDialogos(arrayDialogos);
juego.manejadorDeDialogos = manejadorDeDialogos;


let flag1 = new Flag(0, true); // Si esta activada, el dialogo salta. Esta flag es para que no salte mas dialogo del ascensor
let flag2 = new Flag(0, true);
let flag3 = new Flag(0, true);
let flag4 = new Flag(0, true);
let manejadorDeFlags = new ManejadorDeFlags([flag1, flag2, flag3, flag4]);
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