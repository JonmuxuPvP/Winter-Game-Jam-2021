import { Juego } from "./scripts/juego.js";
import { Area, Escena, ManejadorDeDialogos, ManejadorDeEscenas, ManejadorDeItems, Item, Objeto } from "./scripts/utilidades.js";
import { Dialogo } from "./scripts/visual.js";

let juego = new Juego(1200, 900);

juego.empezar();