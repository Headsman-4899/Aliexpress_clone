import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoriesService } from '../categories.service'
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public products = [];

  constructor(private route: ActivatedRoute, private _productService: ProductService, private _categoryService: CategoriesService, private router: Router) { 
  }

  public category = this.route.snapshot.params['id']
  

  ngOnInit() {
      this._productService.getProduct().subscribe(data => {
        this.products = data.filter(object => object.category == this.category)
    })

    // this._categoryService.getCategories().subscribe(data => {
      // this.categoryId = data.filter(object => object.id);
    // })

    }


  onSelect(product) {
    this.router.navigate(['categories/' + product.category, product.id]);
  }
}
