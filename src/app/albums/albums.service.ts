import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { ApiService } from '../shared/services/api.service';

export interface albums {
  userId: number;
  id: number;
  title: string;
}

@Injectable({
  providedIn: 'root',
})
export class AlbumsService {
  constructor(private api: ApiService, private http: HttpClient) {}

  //

  getAlbums(): Observable<albums[]> {
    return this.api.get<albums[]>(`albums`);
  }
}
