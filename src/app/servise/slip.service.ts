import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Root } from '../models/slip';

@Injectable({
  providedIn: 'root'
})
export class SlipService {
  url = 'https://api.adviceslip.com/advice';

  // injetando um servico
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // // Observable<Root> assim que chegar uma requisicao vai mapear o tipo Root
  getSlips(): Observable<Root> {
    // retorna o resultado da requisicao
    return this.httpClient.get<Root>(this.url)
      // se falhar uma ve ele tenta novamente
      .pipe(retry(2));
  }
}
