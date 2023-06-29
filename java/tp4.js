var PartidoPolitico = /** @class */ (function () {
    // Otros atributos como líder, ideología, etc.
    function PartidoPolitico(nombre, sigla) {
        this.nombre = nombre;
        this.sigla = sigla;
    }
    return PartidoPolitico;
}());
var Candidato = /** @class */ (function () {
    // Otros atributos como edad, experiencia, etc.
    function Candidato(nombre, partidoPolitico) {
        this.nombre = nombre;
        this.partidoPolitico = partidoPolitico;
    }
    return Candidato;
}());
var Lista = /** @class */ (function () {
    function Lista(nombre, candidatos) {
        this.nombre = nombre;
        this.candidatos = candidatos;
    }
    return Lista;
}());
var Votante = /** @class */ (function () {
    // Otros atributos como dirección, fecha de nacimiento, etc.
    function Votante(nombre, dni) {
        this.nombre = nombre;
        this.dni = dni;
    }
    return Votante;
}());
var Voto = /** @class */ (function () {
    function Voto(votante, candidato) {
        this.votante = votante;
        this.candidato = candidato;
    }
    return Voto;
}());
// Ejemplo de uso:
// Crear partidos políticos
var partido1 = new PartidoPolitico("Partido A", "PA");
var partido2 = new PartidoPolitico("Partido B", "PB");
// Crear candidatos
var candidato1 = new Candidato("Candidato 1", partido1);
var candidato2 = new Candidato("Candidato 2", partido1);
var candidato3 = new Candidato("Candidato 3", partido2);
var candidato4 = new Candidato("Candidato 4", partido2);
// Crear listas
var lista1 = new Lista("Lista 1", [candidato1, candidato2]);
var lista2 = new Lista("Lista 2", [candidato3, candidato4]);
// Crear votantes
var votante1 = new Votante("Votante 1", "11111111");
var votante2 = new Votante("Votante 2", "22222222");
// Realizar un voto
var voto1 = new Voto(votante1, candidato1);
var voto2 = new Voto(votante2, candidato3);
