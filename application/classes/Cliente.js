import { mockListaCliente } from '../mocks'

export class Cliente {
  constructor() {
    this.listaCliente = mockListaCliente;
  }

  consultarCliente() {
    return this.listaCliente;
  }
}