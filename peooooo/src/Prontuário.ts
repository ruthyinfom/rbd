import Paciente from "./Paciente";
export class Prontuario {
    public paciente: Paciente;
    public historico: string;
    constructor(paciente:Paciente, historico:string) {
        this.paciente = paciente;
        this.historico = historico;
    }
}
