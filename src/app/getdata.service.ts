import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private _httpClient:HttpClient){
   }
  getMovies(pageNo):Observable<any>{
    return this._httpClient.get<any>(`https://api.themoviedb.org/3/movie/popular?api_key=b42c7ffd8fb3615ec3680fd9efbf6683&language=en-US&page=${pageNo}`);
  }
  getSeries(pageNo):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/4/tv/popular?api_key=b42c7ffd8fb3615ec3680fd9efbf6683&language=en-US&page=${pageNo}`);
  }
  getMovieDetails(id):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b42c7ffd8fb3615ec3680fd9efbf6683&language=en-US`);
  }
  getSimilarMovies(type,id,pageNo):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/${type}/${id}/similar?api_key=b42c7ffd8fb3615ec3680fd9efbf6683&language=en-US&page=${pageNo}`);
  }
  getUpComingMovies(pageNo):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=b42c7ffd8fb3615ec3680fd9efbf6683&language=en-US&page=${pageNo}`);
  }
  getSeriesDetails(id):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=b42c7ffd8fb3615ec3680fd9efbf6683&language=en-US`);
  }
  getSeasonOfSeries(id,seasonNo):Observable<any>{
    return this._httpClient.get(`https://api.themoviedb.org/3/tv/${id}/season/${seasonNo}?api_key=b42c7ffd8fb3615ec3680fd9efbf6683&language=en-US`);
  }
}
