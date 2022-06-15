import { mockListaPacote } from "../mocks";

export class Pacote {
  constructor() {
    this.listaPacote = mockListaPacote;
  }

  get() {
    new Promise((resolve, reject) => {
      if (!this.listaPacote) {
        return setTimeout(
          () =>
            reject(new Error("Não foi possível carregar a lista de pacotes")),
          250
        );
      }

      setTimeout(() => resolve(Object.values(this.listaPacote)), 250);
    });
  }

  getById(id) {
    new Promise((resolve, reject) => {
      const pacote = this.listaPacote[id];

      if (!pacote) {
        return setTimeout(
          () =>
            reject(new Error(`Não foi possível carregar o pacote de id ${id}`)),
          250
        );
      }

      setTimeout(() => resolve(this.listaPacote[id]), 250);
    });
  }

  post(data) {
    new Promise((resolve, reject) => {
      if (!data) {
        reject(new Error("Não foi possível cadastrar o pacote"));
      }

      const id = Object.keys(this.listaPacote).length + 1;
      const novoPacote = {
        id,
        ...data,
      };

      this.listaPacote = { ...this.listaPacote, [id]: novoPacote };
      setTimeout(() => resolve(data), 250);
    });
  }

  update(id, data) {
    new Promise((resolve, reject) => {
      if (!this.listaPacote[id]) {
        return setTimeout(
          () =>
            reject(
              new Error(`Não foi possível atualizar o pacote de id ${id}`)
            ),
          250
        );
      }

      users[id] = { ...users[id], ...data };
      return setTimeout(() => resolve(true), 250);
    });
  }

  delete(id) {
    new Promise((resolve, reject) => {
      const { [id]: user, ...rest } = this.listaPacote;

      if (!user) {
        return setTimeout(
          () => reject(new Error("Não foi possível deletar o pacote")),
          250
        );
      }

      this.listaPacote = { ...rest };
      return setTimeout(() => resolve(true), 250);
    });
  }

  consultarPacote() {
    return this.listaPacote;
  }
}
