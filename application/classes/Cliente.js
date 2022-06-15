import { mockListaCliente } from "../mocks";

export class Cliente {
  constructor() {
    this.listaCliente = mockListaCliente;
  }

  get() {
    new Promise((resolve, reject) => {
      if (!this.listaCliente) {
        return setTimeout(
          () =>
            reject(new Error("Não foi possível carregar a lista de clientes")),
          250
        );
      }

      setTimeout(() => resolve(Object.values(this.listaCliente)), 250);
    });
  }

  getById(id) {
    new Promise((resolve, reject) => {
      const cliente = this.listaCliente[id];

      if (!cliente) {
        return setTimeout(
          () =>
            reject(
              new Error(`Não foi possível carregar o cliente de id ${id}`)
            ),
          250
        );
      }

      setTimeout(() => resolve(this.listaCliente[id]), 250);
    });
  }

  post(data) {
    new Promise((resolve, reject) => {
      if (!data) {
        reject(new Error("Não foi possível cadastrar o cliente"));
      }

      const id = Object.keys(this.listaCliente).length + 1;
      const novoCliente = {
        id,
        ...data,
      };

      this.listaCliente = { ...this.listaCliente, [id]: novoCliente };
      setTimeout(() => resolve(data), 250);
    });
  }

  update(id, data) {
    new Promise((resolve, reject) => {
      if (!this.listaCliente[id]) {
        return setTimeout(
          () =>
            reject(
              new Error(`Não foi possível atualizar o cliente de id ${id}`)
            ),
          250
        );
      }

      this.listaCliente[id] = { ...this.listaCliente[id], ...data };
      return setTimeout(() => resolve(true), 250);
    });
  }

  delete(id) {
    new Promise((resolve, reject) => {
      const { [id]: cliente, ...rest } = this.listaCliente;

      if (!cliente) {
        return setTimeout(
          () => reject(new Error("Não foi possível deletar o cliente")),
          250
        );
      }

      this.listaCliente = { ...rest };
      return setTimeout(() => resolve(true), 250);
    });
  }
}
