import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/auth"

  constructor(private HttpClient: HttpClient) { }

  login(email: string, password: string) {
    return this.HttpClient.post<LoginResponse>(this.apiUrl + "/login", { email, password }).pipe(tap((value) => {
      sessionStorage.setItem("auth-token", value.token)
      sessionStorage.setItem("auth-token", value.name)
    }))
  }

  signup(name: string, email: string, password: string) {
    return this.HttpClient.post<LoginResponse>(this.apiUrl + "/register", { name, email, password }).pipe(tap((value) => {
      sessionStorage.setItem("auth-token", value.token)
      sessionStorage.setItem("auth-token", value.name)
    }))
  }
}
