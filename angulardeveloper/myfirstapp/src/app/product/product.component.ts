
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Output() cartemmiter=new EventEmitter<any>();
  ngOnInit(): void {
  }
  products=[
    {
      "id":1,
      "productname":"Chilly",
      "price":400,
      "quntityavailable":5,
      "location":"rajkot",
      "presentstock":40,
      "url":"https://www.bigbasket.com/media/uploads/p/l/10000069_20-fresho-capsicum-green.jpg"
      },
      
    {
      "id":2,
      "productname":"Onion",
      "price":300,
      "quntityavailable":4,
      "location":"rajkot",
      "presentstock":50,
      "url":"https://www.bigbasket.com/media/uploads/p/l/10000150_19-fresho-onion.jpg"
      },
      
    {
      "id":3,
      "productname":"Strawberry",
      "price":400,
      "quntityavailable":7,
      "location":"surat",
      "presentstock":50,
      "url":"https://www.bigbasket.com/media/uploads/p/l/10000263_11-fresho-strawberry.jpg"
    }
      
  ]
  addtocart(product:any){
    this.cartemmiter.emit(product);
  }

}
