
class ManejadorDeEscenas {
    constructor(escenas) {
        this.escenas = escenas;
        this.escenaActual = this.escenas[0];
    }

    cambiarEscena(indice) {
        this.escenaActual = this.escenas[indice];
    }

    listarEscenas() {
        console.table(this.escenas);
    }
}

class Escena {
    constructor(id, imagen, objetos) {
        this.id = id;
        this.imagen = imagen;
        this.objetos = objetos;
    }
}

class Objeto {
    constructor(area, juego, codigo) {
        this.area = area;
        this.juego = juego;
        this.codigo = codigo;
    }
}

class Area {
    constructor(minX, minY, maxX, maxY) {
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
    }

    enArea(x, y) {
        return (x > this.minX && x < this.maxX) && (y > this.minY && y < this.maxY);
    }
}

class ManejadorDeFlags {
    constructor(flags) {
        this.flags = flags;
    }

    getFlag(indice) {
        return this.flags[indice];
    }

    listarFlags() {
        console.table(this.flags);
    }
}

class Flag {
    constructor(id, activa = false) {
        this.id = id;
        this.activa = activa;
    }

    activar() {
        this.activa = true;
    }

    desactivar() {
        this.activa = false;
    }
}

class ManejadorDeDialogos {
    constructor(dialogos) {
        this.dialogos = dialogos;
    }

    getDialogo(indice) {
        return this.dialogos[indice];
    }
}

class ManejadorDePistaSonido {
    constructor(pistas, sonidos) {
        this.pistas = pistas;
        this.sonidos = sonidos;
    }

    playPista(indice) {
        this.pistas[indice].play();
    }

    pausaPista(indice) {
        this.pistas[indice].pause();
    }

    buclePista(indice) {
        this.pistas[indice].loop = true;
    }

    playSonido(indice) {
        this.sonidos[indice].play();
    }

    listarPistas() {
        console.table(this.pistas);
    }

    listarSonidos() {
        console.table(this.sonidos);
    }
}

class ManejadorDeItems {
    constructor(items) {
        this.items = items;
    }

    getItem(indice) {
        return this.items[indice];
    }
}

class Item {
    constructor(id, imagen) {
        this.id = id;
        this.imagen = new Image();
        this.imagen.src = imagen;
    }
}

class Texto {
    constructor() {
        this.texto = [];
    }
}

export { 
    ManejadorDeEscenas, Escena, Objeto, Area, 
    ManejadorDeFlags, Flag, 
    ManejadorDeDialogos, 
    ManejadorDePistaSonido,
    ManejadorDeItems, Item,
    Texto 
}