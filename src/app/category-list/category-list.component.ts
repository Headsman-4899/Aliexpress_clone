import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  public categories = [];

  constructor(private _categoryService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    this._categoryService.getCategories()
      .subscribe(data => {  
        this.categories = data
      })
  }
  redirect(path) {

    window.location.href = path;

  } 
  
  onSelect(category) {
    this.router.navigate(['/categories', category.id]);
  }}
