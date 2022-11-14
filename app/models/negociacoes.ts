import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = []; // == private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    lista(): readonly Negociacao[] { // == lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}