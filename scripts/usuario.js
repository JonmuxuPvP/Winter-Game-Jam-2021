
class Jugador {
    static items = [];

    constructor(nombre) {
        this.nombre = nombre;
    }

    añadirItem(item) {
        Jugador.items[item.id] = item;
    }

    quitarItem(item) {
        Jugador.items[item.id] = undefined;
    }

}


export { Jugador }