import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JaratokapiService {
  
  constructor(private http: HttpClient) { }

  getJaratok() {
    let endpoint = 'jaratok'
    let url = environment.restapi_host + endpoint;
    return this.http.get<any>(url);

  }
}
