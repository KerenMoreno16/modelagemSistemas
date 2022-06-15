import { mockListaPlano } from "../mocks";

export class Plano {
  constructor() {
    this.listaPlano = mockListaPlano;
  }

  get() {
    new Promise((resolve, reject) => {
      if (!this.listaPlano) {
        return setTimeout(
          () =>
            reject(new Error("Não foi possível carregar a lista de planos")),
          250
        );
      }

      setTimeout(() => resolve(Object.values(this.listaPlano)), 250);
    });
  }

  getById(id) {
    new Promise((resolve, reject) => {
      const plano = this.listaPlano[id];

      if (!plano) {
        return setTimeout(
          () =>
            reject(new Error(`Não foi possível carregar o plano de id ${id}`)),
          250
        );
      }

      setTimeout(() => resolve(this.listaPlano[id]), 250);
    });
  }

  post(data) {
    new Promise((resolve, reject) => {
      if (!data) {
        reject(new Error("Não foi possível cadastrar o plano"));
      }

      const id = Object.keys(this.listaPlano).length + 1;
      const novoPlano = {
        id,
        ...data,
      };

      this.listaPlano = { ...this.listaPlano, [id]: novoPlano };
      setTimeout(() => resolve(data), 250);
    });
  }

  update(id, data) {
    new Promise((resolve, reject) => {
      if (!this.listaPlano[id]) {
        return setTimeout(
          () =>
            reject(new Error(`Não foi possível atualizar o plano de id ${id}`)),
          250
        );
      }

      this.listaPlano[id] = { ...this.listaPlano[id], ...data };
      return setTimeout(() => resolve(true), 250);
    });
  }

  delete(id) {
    new Promise((resolve, reject) => {
      const { [id]: plano, ...rest } = this.listaPlano;

      if (!plano) {
        return setTimeout(
          () => reject(new Error("Não foi possível deletar o plano")),
          250
        );
      }

      this.listaPlano = { ...rest };
      return setTimeout(() => resolve(true), 250);
    });
  }
}
