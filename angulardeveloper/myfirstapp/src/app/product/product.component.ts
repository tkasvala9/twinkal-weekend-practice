
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Output() productcounter=new EventEmitter<any>();

  productemmiter(){
    this.productcounter.emit();
  }
  ngOnInit(): void {
  }

}
