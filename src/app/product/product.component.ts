import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../Services/alertify.service';
import { ProductService } from '../Services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {

  constructor(
    private alertifyService :AlertifyService,
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
    ) { }
  title="Ürün Listesi"
  filterText= ""
  products!: Product[];
 
  ngOnInit(){
    this.activatedRoute.params.subscribe(params=>{
      this.productService.getProducts(params["categoryId"]).subscribe(data=>
        this.products=data
        );
    });
    
  }

 addToCard(prdct :Product):void{
  this.alertifyService.success(prdct.name +" Eklendi.")
  //alert("sepete eklendi: "+prdct.name)
 }
}





