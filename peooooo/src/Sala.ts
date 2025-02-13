import Consulta from "./Consulta";
export class Sala {
    public consultas: Consulta[];
    public numero: string;
    public data:Date;
    public horario:string;
    public status:string;

    constructor(numero:string, data:Date, horario:string, status:string, consultas: Consulta[]) {
        this.numero = numero;
        this.data = data;
        this.horario = horario;
        this.status = status;
        this.consultas = consultas;
    }
}
