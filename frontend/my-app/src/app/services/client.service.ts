import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  addVillage(count:number, latitude: number, longitude:number): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:5000/village', {
      'count': count,
      'latitude': latitude,
      'longitude': longitude,
      'color_id': 0 
    });
  }

  getVillages(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5000/village');
  }

  run(centerNum: number, worker_num:number): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:5000/run', {
      "center_num": centerNum,
      "worker_num": worker_num
    })
  }

  get_centers(): Observable<any> {
    return this.http.get<any>('http://127.0.0.1:5000/get_center');
  }
}
