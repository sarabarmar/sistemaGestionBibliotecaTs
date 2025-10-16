class Publicacion {
  public _titulo: string;
  public _autor: string;
  public _anio: number;
  public _disponible: boolean;

  constructor(titulo: string, autor: string, anio: number, disponible: boolean = true) {
    this._titulo = titulo;
    this._autor = autor;
    this._anio = anio;
    this._disponible = disponible;
  }

  mostrarInformacion(): string {
    return (`El libro ${this._titulo} es una obra escrita que transmite conocimientos, ideas o historias, permitiendo al lector aprender, imaginar y reflexionar.`);
  }
}

class Libro extends Publicacion {
  _pagina: number;
  _genero: string;

  constructor(titulo: string, autor: string, anio: number, pagina: number, genero: string, disponible: boolean = true) {
    super(titulo, autor, anio, disponible);
    this._pagina = pagina;
    this._genero = genero;
  }

  mostrarInformacion(): string {
    return (`El libro "${this._titulo}", escrito por ${this._autor} en el año ${this._anio}, 
pertenece al género ${this._genero} y cuenta con ${this._pagina} páginas. 
Actualmente ${this._disponible ? "se encuentra disponible" : "no está disponible"} en la biblioteca.`);
  }
  prestar(): void {
    this._disponible = false;
  }

  devolver(): void {
    this._disponible = true;
  }
}


class Revista extends Publicacion {
  _numeroEdicion: number;
  _mesPublicacion: string;


  constructor(titulo: string, autor: string, anio: number, numeroEdicion: number, mesPublicacion: string, disponible: boolean = true) {
    super(titulo, autor, anio, disponible);
    this._numeroEdicion = numeroEdicion;
    this._mesPublicacion = mesPublicacion;

  }
  mostrarInformacion(): string {
    return (`La revista "${this._titulo}", dirigida por ${this._autor} y publicada en el año ${this._anio}, pertenece al numero de edicion ${this._numeroEdicion} y cuenta con el mes de publicacion${this._mesPublicacion} . Actualmente ${this._disponible ? "se encuentra disponible" : "no está disponible"} en la biblioteca.`);

  }
}

interface Usuario {
  _nombre: string;
  _id: number;
  mostrarHistorial(): void;
}
class Lector implements Usuario {
  _nombre: string;
  _id: number;
  _prestamos: string[]

  constructor(nombre: string, id: number) {
    this._nombre = nombre;
    this._id = id;
    this._prestamos = [];
  }

  prestarPublicacion(titulo: string): void {
    this._prestamos.push(titulo);
  }
  devolverPublicacion(titulo: string): void {
    this._prestamos = this._prestamos.filter(p => p !== titulo);
  }
  mostrarHistorial(): void {
    if (this._prestamos.length === 0) {
      console.log(`${this._nombre} no tiene publicaciones prestadas`)
    } else {
      console.log(`Historial de ${this._nombre}: ${this._prestamos.join(`,`)}`);

    }
  }

}

const libro1 = new Libro("Los mendigos de Dios", "Mario Mendoza", 2024, 350, "Thriller", true);
const libro2 = new Libro("Virgenes y Toxicomanos", "Mario Mendoza", 2025, 269, "Ficción y temas afines", true);


const revista1 = new Revista("El impacto de la inteligencia artificial en la educación", "García, J. R", 2020, 45, "mayo", true);
console.log(libro1);
console.log(libro2);
console.log(revista1);


const lector1 = new Lector("Sara", 1);
const lector2 = new Lector("Laura", 2);
lector1.prestarPublicacion(libro1._titulo);
lector1.prestarPublicacion(revista1._titulo);
lector2.prestarPublicacion(libro2._titulo);
lector1.mostrarHistorial();
lector2.mostrarHistorial();
lector1.devolverPublicacion(revista1._titulo);
lector1.mostrarHistorial();
