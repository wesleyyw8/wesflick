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
  public isLoading = true;
  constructor(private http: HttpClient) { }

  getAllEonetEvents(filter): Observable<any[]> {
    this.isLoading = true;
    return this.http.get<any[]>(this.url + '?' + filter + '&limit=50')
      .pipe(
        tap(data => {
          this.isLoading = false;
        })
      );
  }

  getEonetEventById(id): Observable<Eonet> {
    return this.http.get<any[any]>(`${this.url}/${id}`)
      .pipe(
        map(b => <Eonet> {
          id: b.id,
          title: b.title,
          link: b.link,
          date: b.geometries ? b.geometries[0].date.slice(0, 10).split('-').toString().replace(/,/g, '/') : ''
        }),
        tap(data => {
          this.isLoading = false;
        }));
  }
}
