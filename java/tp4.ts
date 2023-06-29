class PartidoPolitico {
    nombre: string;
    sigla: string;
    // Otros atributos como líder, ideología, etc.
  
    constructor(nombre: string, sigla: string) {
      this.nombre = nombre;
      this.sigla = sigla;
    }
  }
  
  class Candidato {
    nombre: string;
    partidoPolitico: PartidoPolitico;
    // Otros atributos como edad, experiencia, etc.
  
    constructor(nombre: string, partidoPolitico: PartidoPolitico) {
      this.nombre = nombre;
      this.partidoPolitico = partidoPolitico;
    }
  }
  
  class Lista {
    nombre: string;
    candidatos: Candidato[];
  
    constructor(nombre: string, candidatos: Candidato[]) {
      this.nombre = nombre;
      this.candidatos = candidatos;
    }
  }
  
  class Votante {
    nombre: string;
    dni: string;
    // Otros atributos como dirección, fecha de nacimiento, etc.
  
    constructor(nombre: string, dni: string) {
      this.nombre = nombre;
      this.dni = dni;
    }
  }
  
  class Voto {
    votante: Votante;
    candidato: Candidato;
  
    constructor(votante: Votante, candidato: Candidato) {
      this.votante = votante;
      this.candidato = candidato;
    }
  }
  
  // Ejemplo de uso:
  
  // Crear partidos políticos
  const partido1 = new PartidoPolitico("Partido A", "PA");
  const partido2 = new PartidoPolitico("Partido B", "PB");
  
  // Crear candidatos
  const candidato1 = new Candidato("Candidato 1", partido1);
  const candidato2 = new Candidato("Candidato 2", partido1);
  const candidato3 = new Candidato("Candidato 3", partido2);
  const candidato4 = new Candidato("Candidato 4", partido2);
  
  // Crear listas
  const lista1 = new Lista("Lista 1", [candidato1, candidato2]);
  const lista2 = new Lista("Lista 2", [candidato3, candidato4]);
  
  // Crear votantes
  const votante1 = new Votante("Votante 1", "11111111");
  const votante2 = new Votante("Votante 2", "22222222");
  
  // Realizar un voto
  const voto1 = new Voto(votante1, candidato1);
  const voto2 = new Voto(votante2, candidato3);