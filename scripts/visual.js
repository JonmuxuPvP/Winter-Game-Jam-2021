import { Texto, Item } from "./utilidades.js";
import { Jugador } from "./usuario.js";

class Pantalla {
    static canvas = document.getElementById("canvas");
    static ctx = canvas.getContext("2d");
    static fps = 60;

    constructor(anchura, altura) {
        Pantalla.canvas.width = anchura;
        Pantalla.canvas.height = altura;
        this.frame = new Image(); 
        this.frame.src = "./imagenes/CafeteriaDia.png";
    }

    actualizar() {
        Pantalla.ctx.globalAlpha = 1;
    }

    dibujar() {
        this.limpiarPantalla(); 
        Pantalla.ctx.drawImage(this.frame, 0, 0);
    }

    limpiarPantalla() {
        Pantalla.ctx.clearRect(0, 0, Pantalla.canvas.width, Pantalla.canvas.height);
    }

}

class HUD {
    constructor(imagen) {
        this.imagen = new Image();
        this.imagen.src = imagen;

        this.imagenItem = new Image();
        this.items = [
            new Item(0, "./imagenes/graficos/llave.png"),
            new Item(1, "./imagenes/graficos/gafas.png"),
            new Item(2, "./imagenes/graficos/caja.png"),
            new Item(3, "./imagenes/graficos/movil.png")
        ];
    }

    actualizar() {

    }

    dibujar() {
        Pantalla.ctx.drawImage(this.imagen, 1130, (Pantalla.canvas.height / 2) - (this.imagen.height / 2));

        for (let i = 0; i < this.items.length; i++) {
            if (typeof Jugador.items[i] !== "undefined") {
                console.log(Jugador.items[i].id);
                Pantalla.ctx.drawImage(Jugador.items[i].imagen, 1140, 305 + (i * 60));
            }
        }

    }
}

class Dialogo {
    constructor(textos, nombre) {
        this.longitudMaxima = 330; // pixeles? hardcodeadisimos

        this.textos = this.separarLineas(textos);
        this.fadeIn = true; // sorry por forzar esto, pero no hay tiempo para 
        this.fadeOut = true; // trabajar en que sea tan personalizable. La mitad del codigo es inutil ^^"
        this.nombre = nombre;

        this.finFadeIn = false;
        this.finFadeOut = false;
        this.finTexto = false;

        this.activo = false;
        this.fuente = "20px Arial";
        this.imagen = new Image();
        this.imagen.src = "./imagenes/graficos/caja-dialogo.png";
        this.imagenNombre = new Image();
        this.imagenNombre.src = "./imagenes/graficos/caja-dialogo-del-nombre.png";

        this.separacionDeLinea = 20; // pixeles
        this.posicionX = (Pantalla.canvas.width / 2) - (this.imagen.width / 2);
        this.posicionY = 600;

        this.posicionTextoActual = 0;
        this.posicionLineaActual = 0;

        this.textoEscrito = [];
        this.textoAEscribir = "";
        this.contadorLetras = 0;

        this.alpha = 0;
        this.delta = 0.05;
    }

    separarLineas(textos) {
        let resultado = [];

        Pantalla.ctx.font = this.fuente;

        for (const texto of textos) {
            let objetoTexto = new Texto();
            let linea = "";
            for (const palabra of texto.split(" ")) {
                linea += palabra + " "; 
                if (Pantalla.ctx.measureText(linea).width > this.longitudMaxima) {
                    objetoTexto.texto.push(linea);
                    linea = "";
                }
            }
            objetoTexto.texto.push(linea.trim());
            resultado.push(objetoTexto);
        }

        return resultado;
    }

    actualizar() {
        Pantalla.ctx.font = this.fuente;

        if (this.fadeIn && !this.finFadeIn) {
            this.animacionFadeIn();
        }

        if (this.finFadeIn && !this.finTexto) {
            // Si todavia no se han escrito TODOS los dialogos
            if (this.posicionLineaActual <= this.textos.length - 1) {
            // Si todavia queda texto por dibujar
                if (this.posicionTextoActual <= this.textos[this.posicionLineaActual].texto.length - 1) {
                    let textoActual = this.textos[this.posicionLineaActual].texto[this.posicionTextoActual];
                    this.textoAEscribir = textoActual.substr(0, this.contadorLetras); 
                    this.contadorLetras++;
                    // Si se ha llegado al final de la linea
                    if (this.contadorLetras - 1 >= textoActual.length) { 
                        this.textoEscrito.push(this.textoAEscribir);
                        this.textoAEscribir = "";
                        this.posicionTextoActual++;
                        this.contadorLetras = 0;
                    }
                }
            } else {
                this.finTexto = true;
            }
        }
       
        if (this.fadeOut && this.finTexto && !this.finFadeOut) {
            this.animacionFadeOut();
        }

        if (this.finFadeOut) {
            // resetear todo
            this.finFadeIn = false;
            this.finFadeOut = false;
            this.finTexto = false;
            this.posicionTextoActual = 0;
            this.posicionLineaActual = 0;
            this.activo = false;
        }

        Pantalla.ctx.globalAlpha = this.alpha; 
    }

    dibujar() {
        let offset = 47;

        if (typeof this.nombre !== "undefined") {
            Pantalla.ctx.textAlign = "center";
            Pantalla.ctx.drawImage(this.imagenNombre, this.posicionX + 30, this.posicionY - 45);
            Pantalla.ctx.fillText(this.nombre, this.posicionX + 127, this.posicionY - 14);
        }
        Pantalla.ctx.textAlign = "left";

        Pantalla.ctx.drawImage(this.imagen, this.posicionX, this.posicionY);

        let i = 0;
        for (const linea of this.textoEscrito) {
            Pantalla.ctx.fillText(linea, this.posicionX + offset, (this.posicionY + offset) + (this.separacionDeLinea * i));
            i++;
        }

        Pantalla.ctx.fillText(this.textoAEscribir, this.posicionX + offset, (this.posicionY + offset) + (this.separacionDeLinea * i));
    }

    mostrar() {
        this.activo = true;
    }

    siguienteTexto() {
        if (!this.finTexto) {
            this.textoEscrito = [];
            this.contadorLetras = 0;
            this.posicionTextoActual = 0;
            this.posicionLineaActual++;
        }
    }

    animacionFadeIn() {
        if (this.alpha <= 1) {
            this.alpha += this.delta;
        } else {
            this.finFadeIn = true;
        }
    }

    animacionFadeOut() {
        if (this.alpha >= 0.05) {
            this.alpha -= this.delta;
        } else {
            this.finFadeOut = true;
        }
    }
}

export { Pantalla, HUD, Dialogo }
