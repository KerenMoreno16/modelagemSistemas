import { mockListaCategoria } from "../mocks";

export class Categoria {
  constructor() {
    this.listaCategoria = mockListaCategoria;
  }

  get() {
    new Promise((resolve, reject) => {
      if (!this.listaCategoria) {
        return setTimeout(
          () =>
            reject(
              new Error("Não foi possível carregar a lista de categorias")
            ),
          250
        );
      }

      setTimeout(() => resolve(Object.values(this.listaCategoria)), 250);
    });
  }

  getById(id) {
    new Promise((resolve, reject) => {
      const categoria = this.listaCategoria[id];

      if (!categoria) {
        return setTimeout(
          () =>
            reject(
              new Error(`Não foi possível carregar a categoria de id ${id}`)
            ),
          250
        );
      }

      setTimeout(() => resolve(this.listaCategoria[id]), 250);
    });
  }

  post(data) {
    new Promise((resolve, reject) => {
      if (!data) {
        reject(new Error("Não foi possível cadastrar a categoria"));
      }

      const id = Object.keys(this.listaCategoria).length + 1;
      const novaCategoria = {
        id,
        ...data,
      };

      this.listaCategoria = { ...this.listaCategoria, [id]: novaCategoria };
      setTimeout(() => resolve(data), 250);
    });
  }

  update(id, data) {
    new Promise((resolve, reject) => {
      if (!this.listaCategoria[id]) {
        return setTimeout(
          () =>
            reject(
              new Error(`Não foi possível atualizar a categoria de id ${id}`)
            ),
          250
        );
      }

      this.listaCategoria[id] = { ...this.listaCategoria[id], ...data };
      return setTimeout(() => resolve(true), 250);
    });
  }

  delete(id) {
    new Promise((resolve, reject) => {
      const { [id]: categoria, ...rest } = this.listaCategoria;

      if (!categoria) {
        return setTimeout(
          () => reject(new Error("Não foi possível deletar a categoria")),
          250
        );
      }

      this.listaCategoria = { ...rest };
      return setTimeout(() => resolve(true), 250);
    });
  }

  consultarCategoria() {
    return this.listaCategoria;
  }
}
