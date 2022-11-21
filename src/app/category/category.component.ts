import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../Services/alertify.service';
import { CategoryService } from '../Services/category.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers:[CategoryService]
})
export class CategoryComponent implements OnInit {

  constructor(
    private categoryService:CategoryService,
    private aletifyService:AlertifyService
  ) { }
  title="Kategori Listesi"
  categories !: Category[];
  ngOnInit() {
    this.categoryService.getCategories().subscribe(data=>{
      this.categories=data});
      
  }

}
// [
//   {id:1, name:"Elektronik"},
//   {id:2, name:"Hobi/Eğlence"},
//   {id:3, name:"Kitap"},
//   {id:4, name:"Müzik"}
// ]