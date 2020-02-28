import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})


export class ProductItemComponent implements OnInit {

  @Input('aliexpress_product') aliexpress_product : any;

  constructor() { }

  ngOnInit() {
  }
}
