import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Ürün Listesi"
  filterText= ""
  products: Product[]=[
    {id:1, name:"laptop", price:2500, categoryid:1, description:"Asus Zenbook", imageUrl:"https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"},
    {id:2, name:"mouse", price:250, categoryid:1, description:"Asus", imageUrl:"https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"},
    {id:3, name:"laptop", price:100, categoryid:1, description:"Asus Zenbook", imageUrl:"https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"},
    {id:4, name:"mouse", price:2050, categoryid:1, description:"Asus", imageUrl:"https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"}
  ]
  ngOnInit(): void {
  }

 addToCard(prdct :Product):void{
  alert("sepete eklendi: "+prdct.name)
 }
}
