import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacaoController {
    private _data: HTMLInputElement;
    private _quantidade: HTMLInputElement;
    private _valor: HTMLInputElement;
    private negociacoes = new Negociacoes();

    constructor() {
        this._data = document.querySelector("#data");
        this._quantidade = document.querySelector("#quantidade");
        this._valor = document.querySelector("#valor");
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        negociacao.data.setDate(10);
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.limparFormulario();
    }

    criaNegociacao(): Negociacao {
        const partesData = this._data.value.split("-");
        const data = new Date(parseInt(partesData[0]), parseInt(partesData[1]) - 1, parseInt(partesData[2]));
        data.toLocaleDateString('pt-BR');
        const quantidade = parseInt(this._quantidade.value);
        const valor = parseFloat(this._valor.value);

        return new Negociacao(data, quantidade, valor);
    }

    limparFormulario(): void {
        this._data.value = "";
        this._quantidade.value = "";
        this._valor.value = "";
        this._data.focus();
    }
}