import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8090/api/auth/register'; // Ajusta si es necesario

  constructor(private http: HttpClient) {}

  registrar(usuario: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, usuario);
  }
}
