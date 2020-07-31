import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DatabaseService {
  URL = "http://localhost:3333/";
  constructor(private http: HttpClient) {}

  get(value: string): any {
    return this.http.get(this.URL + value);
  }

  post(value: string, body: any): any {
    return this.http.post(this.URL + value, body);
  }

}
