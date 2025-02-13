"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Isso vai carregar as variáveis de ambiente do arquivo .env
const pacienteRouter_1 = __importDefault(require("./router/pacienteRouter"));
const MedicoRouter_1 = __importDefault(require("./router/MedicoRouter"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); // Permitir requisições de diferentes origens
app.use(express_1.default.json()); // Para manipular requisições JSON
// Configuração das rotas
app.use('/api/paciente', pacienteRouter_1.default);
app.use('/api/medicos', MedicoRouter_1.default);
console.log('Rotas carregadas corretamente!');
app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});
