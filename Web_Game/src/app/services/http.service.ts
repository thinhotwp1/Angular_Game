import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse, Game } from '../models';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  getGameList(
    oderString:string,
    search?:string
  ):Observable<APIResponse<Game>>{
    let params = new HttpParams().set('oderString',oderString);

    if(search){
      params = new HttpParams().set('oderString',oderString).set('search',search);
    }
    return this.http.get<APIResponse<Game>>(`${env.BASE_URL}/game`){
      params:params;

    }
  }
}
