import { mockListaServico } from "../mocks";

export class Servico {
  constructor() {
    this.listaServico = mockListaServico;
  }

  get() {
    new Promise((resolve, reject) => {
      if (!this.listaServico) {
        return setTimeout(
          () =>
            reject(new Error("Não foi possível carregar a lista de serviços")),
          250
        );
      }

      setTimeout(() => resolve(Object.values(this.listaServico)), 250);
    });
  }

  getById(id) {
    new Promise((resolve, reject) => {
      const servico = this.listaServico[id];

      if (!servico) {
        return setTimeout(
          () =>
            reject(
              new Error(`Não foi possível carregar o serviço de id ${id}`)
            ),
          250
        );
      }

      setTimeout(() => resolve(this.listaServico[id]), 250);
    });
  }

  post(data) {
    new Promise((resolve, reject) => {
      if (!data) {
        reject(new Error("Não foi possível cadastrar o serviço"));
      }

      const id = Object.keys(this.listaServico).length + 1;
      const novoservico = {
        id,
        ...data,
      };

      this.listaServico = { ...this.listaServico, [id]: novoservico };
      setTimeout(() => resolve(data), 250);
    });
  }

  update(id, data) {
    new Promise((resolve, reject) => {
      if (!this.listaServico[id]) {
        return setTimeout(
          () =>
            reject(
              new Error(`Não foi possível atualizar o serviço de id ${id}`)
            ),
          250
        );
      }

      this.listaServico[id] = { ...this.listaServico[id], ...data };
      return setTimeout(() => resolve(true), 250);
    });
  }

  delete(id) {
    new Promise((resolve, reject) => {
      const { [id]: servico, ...rest } = this.listaServico;

      if (!servico) {
        return setTimeout(
          () => reject(new Error("Não foi possível deletar o serviço")),
          250
        );
      }

      this.listaServico = { ...rest };
      return setTimeout(() => resolve(true), 250);
    });
  }
}
