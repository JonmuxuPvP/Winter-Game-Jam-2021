import {   
    ManejadorDeEscenas, Escena, Objeto, Area, 
    ManejadorDeFlags, Flag, 
    ManejadorDeDialogos, 
    ManejadorDePistaSonido,
    ManejadorDeItems, Item
} from "./utilidades.js";

import {
    Pantalla, HUD, Dialogo
} from "./visual.js";

import { Jugador } from "./usuario.js";

class Juego {
    constructor(anchura, altura) {
        this.pantalla = new Pantalla(anchura, altura);

        this.HUD = new HUD("./imagenes/graficos/hud.png");

        this.jugador = new Jugador("Sin definir"); 

        this.dialogoEnPantalla = false;
    }

    empezar() {
        this.cargarEventos();

        this.gameLoop();
    }

    cargarEventos() {
        Pantalla.canvas.addEventListener("mousedown", click => {
            console.log(click.x + " " + click.y);

            if (!this.dialogoEnPantalla) {
                for (const objeto of this.manejadorDeEscenas.escenaActual.objetos) {
                    if (objeto.area.enArea(click.x, click.y)) {
                        objeto.codigo();
                    }
                }


            } else {
                for (const dialogo of this.manejadorDeDialogos.dialogos) {
                    if (dialogo.activo) {
                        dialogo.siguienteTexto();
                    }
                }
            }
        });
    }

    gameLoop() {
        console.log("running");

        this.pantalla.frame.src = this.manejadorDeEscenas.escenaActual.imagen;

        this.pantalla.actualizar();
        this.pantalla.dibujar();

        this.HUD.actualizar();
        this.HUD.dibujar();

        this.comprobarDialogos();


        setTimeout(this.gameLoop.bind(this), 1000 / Pantalla.fps);
    }

    comprobarDialogos() {
        for (const dialogo of this.manejadorDeDialogos.dialogos) {
            if (dialogo.activo) {
                dialogo.actualizar();
                dialogo.dibujar();
                this.dialogoEnPantalla = true;
                return;
            } else {
                this.dialogoEnPantalla = false;
            }
        }
    }

}

export { Juego }