"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Publicacion {
    _titulo;
    _autor;
    _anio;
    _disponible;
    constructor(titulo, autor, anio, disponible = true) {
        this._titulo = titulo;
        this._autor = autor;
        this._anio = anio;
        this._disponible = disponible;
    }
    mostrarInformacion() {
        return (`El libro ${this._titulo} es una obra escrita que transmite conocimientos, ideas o historias, permitiendo al lector aprender, imaginar y reflexionar.`);
    }
}
class Libro extends Publicacion {
    _pagina;
    _genero;
    constructor(titulo, autor, anio, pagina, genero, disponible = true) {
        super(titulo, autor, anio, disponible);
        this._pagina = pagina;
        this._genero = genero;
    }
    mostrarInformacion() {
        return (`El libro "${this._titulo}", escrito por ${this._autor} en el año ${this._anio}, 
pertenece al género ${this._genero} y cuenta con ${this._pagina} páginas. 
Actualmente ${this._disponible ? "se encuentra disponible" : "no está disponible"} en la biblioteca.`);
    }
    prestar() {
        this._disponible = false;
    }
    devolver() {
        this._disponible = true;
    }
}
class Revista extends Publicacion {
    _numeroEdicion;
    _mesPublicacion;
    constructor(titulo, autor, anio, numeroEdicion, mesPublicacion, disponible = true) {
        super(titulo, autor, anio, disponible);
        this._numeroEdicion = numeroEdicion;
        this._mesPublicacion = mesPublicacion;
    }
    mostrarInformacion() {
        return (`La revista "${this._titulo}", dirigida por ${this._autor} y publicada en el año ${this._anio}, pertenece al numero de edicion ${this._numeroEdicion} y cuenta con el mes de publicacion${this._mesPublicacion} . Actualmente ${this._disponible ? "se encuentra disponible" : "no está disponible"} en la biblioteca.`);
    }
}
class Lector {
    _nombre;
    _id;
    _prestamos;
    constructor(nombre, id) {
        this._nombre = nombre;
        this._id = id;
        this._prestamos = [];
    }
    prestarPublicacion(titulo) {
        this._prestamos.push(titulo);
    }
    devolverPublicacion(titulo) {
        this._prestamos = this._prestamos.filter(p => p !== titulo);
    }
    mostrarHistorial() {
        if (this._prestamos.length === 0) {
            console.log(`${this._nombre} no tiene publicaciones prestadas`);
        }
        else {
            console.log(`Historial de ${this._nombre}+${this._prestamos.join(`,`)}`);
        }
    }
}
const libro1 = new Libro("Los mendigos de Dios", "Mario Mendoza", 2024, 350, "Thriller");
const libro2 = new Libro("Virgenes y Toxicomanos", "Mario Mendoza", 2025, 269, "Ficción y temas afines");
const revista1 = new Revista("El impacto de la inteligencia artificial en la educación", "García, J. R", 2020, 45, "mayo");
const lector1 = new Lector("Sara", 1);
const lector2 = new Lector("Laura", 2);
lector1.prestarPublicacion(libro1._titulo);
lector1.prestarPublicacion(revista1._titulo);
lector2.prestarPublicacion(libro2._titulo);
lector1.mostrarHistorial();
lector2.mostrarHistorial();
lector1.devolverPublicacion(revista1._titulo);
lector1.mostrarHistorial();
//# sourceMappingURL=Publicacion.js.map