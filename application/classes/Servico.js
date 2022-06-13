import { mockListaServico } from '../mocks';

export class Servico {
  constructor() {
    this.listaPacote = mockListaServico;
  }

  consultarServico() {
    return this.listaPacote;
  }
}