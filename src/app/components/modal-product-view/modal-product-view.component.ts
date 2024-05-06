import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-modal-product-view',
  templateUrl: './modal-product-view.component.html',
  styleUrl: './modal-product-view.component.css'
})
export class ModalProductViewComponent implements OnInit{

  @Input() product: Product | undefined

  @Output() close: EventEmitter<string> = new EventEmitter<string>()

  constructor () { }

  ngOnInit(): void {

  }

  closeModal() {
    this.close.emit()
  }

}
