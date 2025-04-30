import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { response } from 'express';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit{
  recipes : any[] = [] ;

  constructor(private recipeService : RecipeService){}

  ngOnInit(): void {
    this.recipeService.getRecipes().subscribe(response =>{
      this.recipes = response.meals;
    });
  }

}
