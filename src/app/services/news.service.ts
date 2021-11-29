import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespObtener } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  obtener(){
    return this.http.get<RespObtener>('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0ced511776ad4a3a9d200765ff19b750');
  }

}
