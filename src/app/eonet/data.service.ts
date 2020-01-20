import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eonet } from './eonet';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private getHeaders: HttpHeaders = new HttpHeaders({
    Accept: 'application/json'
  });
  private url = 'https://eonet.sci.gsfc.nasa.gov/api/v2.1/events';

  constructor(private http: HttpClient) { }

  getAllEonetEvents(): Observable<any[]> {
    return this.http.get<any[]>(this.url + '?limit=50');
  }

  getEonetEventById(id): Observable<Eonet> {
    return this.http.get<any[any]>(`${this.url}/${id}`)
      .pipe(
        map(b => <Eonet> {
          id: b.id,
          title: b.title,
          link: b.link,
          date: b.geometries ? new Date(b.geometries[0].date) : ''
        })
      );
  }
}
