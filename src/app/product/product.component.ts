import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Ürün Listesi"
  products: any[]=[
    {id:1, name:"laptop", price:2500, category:1, description:"Asus Zenbook"},
    {id:2, name:"mouse", price:250, category:1, description:"Asus"}
  ]
  ngOnInit(): void {
  }

}
