import { mockListaPacote } from '../mocks';

export class Pacote {
  constructor() {
    this.listaPacote = mockListaPacote;
  }

  consultarPacote() {
    return this.listaPacote;
  }
}