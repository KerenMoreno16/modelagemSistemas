import { mockListaCategoria } from '../mocks'

export class Categoria {
  constructor() {
    this.listaCategoria = mockListaCategoria;
  }

  consultarCategoria() {
    return this.listaCategoria;
  }
}