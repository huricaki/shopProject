import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/category/category';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { CategoryService } from 'src/app/Services/category.service';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-add-forms1',
  templateUrl: './product-add-forms1.component.html',
  styleUrls: ['./product-add-forms1.component.css'],
  providers:[CategoryService, ProductService,AlertifyService]
})
export class ProductAddForms1Component implements OnInit {

  constructor(private categoryService:CategoryService,
    private productService:ProductService,
    private alertifyService:AlertifyService) { }
  model:Product=new Product();
  categories !: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data});
      
  }

  add(form:NgForm){
    this.productService.addProduct(this.model).subscribe(data=>{
      this.alertifyService.success(data.name+" başarıyla eklendi")
    });
    console.log(form.value.name);
  }
}
