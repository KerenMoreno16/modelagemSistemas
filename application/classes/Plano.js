import { mockListaPlano } from '../mocks'

export class Plano {
  constructor() {
    this.listaPlano = mockListaPlano;
  }

  consultarPlano() {
    return this.listaPlano;
  }
}