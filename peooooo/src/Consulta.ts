import Medico from "./Medico";
import { Paciente } from "./Paciente";
import { Sala } from "./Sala";
export class Consulta {
    public paciente:Paciente;
    public medico:Medico;
    public sala:string;
    public data:Date;
    public horario:string;

    constructor(paciente:Paciente, medico:Medico, sala:string, data:Date, horario:string) {
        this.paciente = paciente;
        this.medico = medico;
        this.sala = sala;
        this.data = data;
        this.horario = horario;
    }
}

export default Consulta;