import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {

 @Input() product: Product | undefined

 @Output() deleteProductItem: EventEmitter<Product> = new EventEmitter<Product>()

  constructor () {

  }

  ngOnInit(): void {
    //console.log("-------- PRODUCT ITEM --------");
    //console.log(this.product);
  }

  handleClickProduct(product: Product | undefined) {
    console.log(product);

  }

  deleteProduct(product: Product | undefined) {
    //console.log(product);
    this.deleteProductItem.emit(product)
  }

}
