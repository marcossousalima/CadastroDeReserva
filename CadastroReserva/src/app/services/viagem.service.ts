import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Viagem } from '../models/viagem.model';
import { api } from './api/api';

@Injectable({
  providedIn: 'root'
})
export class ViagemService {

  constructor(
    private http: HttpClient
  ) { }

  getViagem(): Observable<Viagem[]> {
    const url = `${api.baseUrl}/viagem`;
    return this.http.get<Viagem[]>(url);
  }
}
