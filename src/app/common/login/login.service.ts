import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // cretion machine
  sendMachine(body) {
    return this.http.post('http://localhost:3000/api/ajouterMachine', body);
    }

  // creation membre
    sendMember(body) {
    return this.http.post('http://localhost:3000/api/ajouterMembre', body);
    }

  // modification membre

}
