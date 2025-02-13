export class Paciente {
    public nome:string;
    public idade:number;
    public telefone:string;

    constructor(nome:string, idade:number, telefone:string) {
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
    }
}

export default Paciente;
