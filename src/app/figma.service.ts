import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'; // Import your environment file

@Injectable({
  providedIn: 'root'
})
export class FigmaService {

  private figmaAccessToken: string = environment.figmaAccessToken;
  private apiUrl: string = 'https://api.figma.com/v1';

  constructor(private http: HttpClient) { }

  getFiles() {
    const headers = new HttpHeaders({
      'X-FIGMA-TOKEN': this.figmaAccessToken
    });

    return this.http.get(`${this.apiUrl}/files`, { headers });
  }

  // Add more methods as needed to interact with Figma API
}
