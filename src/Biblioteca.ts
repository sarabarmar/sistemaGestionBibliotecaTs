class Biblioteca {
  public titulo: string;
  public autor: string;
  public anio: number;
  public disponible: boolean;

  constructor(titulo: string, autor: string, anio: number, disponible: boolean = true) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.disponible = disponible;
  }
  
}

