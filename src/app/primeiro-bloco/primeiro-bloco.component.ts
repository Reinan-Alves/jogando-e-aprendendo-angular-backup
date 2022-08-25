import { ListaDePerguntas } from './../module/lista-de-perguntas';
import { Component, OnInit } from '@angular/core';
import { PerguntasService } from '../services/perguntas.service';

@Component({
  selector: 'app-primeiro-bloco',
  templateUrl: './primeiro-bloco.component.html',
  styleUrls: ['./primeiro-bloco.component.scss'],
})
export class PrimeiroBlocoComponent implements OnInit {
  public listaDePerguntas: Array<ListaDePerguntas> = [];

  suaResposta: string = '';
  bloquear: boolean = false;
  acertos: number = 0;
  erros: number = 0;
  respondidas: number = 0;
  pontuacao: number = 0;

  cronometro: any = 0;
  tempo: number = 0;

  constructor(private perguntasService: PerguntasService) {}

  ngOnInit(): void {
    this.perguntasService.listaDePerguntas().subscribe({
      next: (res) => (this.listaDePerguntas = res),
      error: (err) => console.log(err),
    });
  }

  // gera o tempo de 40s por perguntas
  geraTempo() {
    this.listaDePerguntas.forEach(() => {
      this.tempo = this.tempo + 10;
      return this.tempo;
    });
  }
  conferirResposta(
    suaResposta: string,
    resposta: string,
    esteInput: any,
    esteButton: any
  ) {
    if (suaResposta == resposta) {
      this.acertos++;
      esteInput.style.backgroundColor = '#39ff14';
      esteInput.disabled = true;
      esteButton.disabled = true;
    } else {
      this.erros++;
      esteInput.style.backgroundColor = '#fc1723';
      esteInput.disabled = true;
      esteButton.disabled = true;
    }
    if (!suaResposta) {
      esteInput.style.backgroundColor = 'white';
      esteInput.disabled = false;
      esteButton.disabled = false;
    }
    this.respondidas = this.acertos + this.erros;
    this.pontuacao = (this.acertos / this.respondidas) * 100 * this.acertos;
  }
  public iniciar() {
    this.bloquear = true;
    this.iniciaValores();
    this.geraTempo();

    this.cronometro = setInterval(() => {
      this.tempo--;
      if (this.tempo < 0) {
        this.parar();
      }
    }, 1000);
  }
  public parar() {
    this.bloquear = false;
    clearInterval(this.cronometro);
  }

  public iniciaValores() {
    this.tempo = 0;
    this.acertos = 0;
    this.respondidas = 0;
    this.erros = 0;
  }
}
