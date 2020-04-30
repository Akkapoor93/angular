import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor( private http:HttpClient) { }

  getTechData()
  {
    const url="https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=74da004083014362a442eb198a6d2fde";
    return this.http.get(url);
  }
}
