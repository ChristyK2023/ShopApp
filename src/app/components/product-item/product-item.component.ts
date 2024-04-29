import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {

 @Input() product: Product | undefined

  constructor () {

  }

  ngOnInit(): void {
    console.log("-------- PRODUCT ITEM --------");
    console.log(this.product);
  }

}
