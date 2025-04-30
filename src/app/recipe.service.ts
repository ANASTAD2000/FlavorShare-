import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast'

  constructor(private http : HttpClient) { }
  getRecipes() : Observable<any>{
    return this.http.get<any>(this.apiUrl)
  }
}
