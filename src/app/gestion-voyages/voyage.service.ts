import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Voyage} from "../voyage";


@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  private apiUrl = `http://localhost:8080/voyages`; // Vous pouvez définir l'URL de l'API dans environment.ts

  constructor(private http: HttpClient) { }

  // Créer un voyage
  createVoyage(voyage: Voyage): Observable<Voyage> {
    return this.http.post<Voyage>(this.apiUrl, voyage);
  }

  // Mettre à jour un voyage
  updateVoyage(id: number, voyage: Voyage): Observable<Voyage> {
    return this.http.put<Voyage>(`${this.apiUrl}/${id}`, voyage);
  }

  // Récupérer un voyage par ID
  getVoyageById(id: number): Observable<Voyage> {
    return this.http.get<Voyage>(`${this.apiUrl}/${id}`);
  }

  // Récupérer tous les voyages
  getAllVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.apiUrl);
  }

  // Supprimer un voyage
  deleteVoyage(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
