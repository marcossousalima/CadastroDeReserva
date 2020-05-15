import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estoque } from '../models/estoque.model';
import { api } from './api/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  // private baseUrl = "http://localhost:3001/estoque";
  constructor(
    private http: HttpClient
  ) { }

  getEstoque(): Observable<Estoque[]> {
    const url = `${api.baseUrl}/estoque`;
    return this.http.get<Estoque[]>(url);
  }
}
