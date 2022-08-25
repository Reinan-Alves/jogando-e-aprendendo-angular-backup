import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListaDePerguntas } from '../module/lista-de-perguntas';

@Injectable({
  providedIn:'root',
})
export class PerguntasService {

  public emitEvent = new EventEmitter;
  private url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public listaDePerguntas(): Observable<Array<ListaDePerguntas>> {
return this.http.get<Array<ListaDePerguntas>>(`${this.url}lista-de-perguntas`)
.pipe(
  (res) => res,
  (error) => error
)
  }

}
