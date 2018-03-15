import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent implements OnInit {
  public items;
  public shoppingItem$;
  constructor(private af: AngularFireDatabase) {
  }
  ngOnInit() {
      this.shoppingItem$ = this.af.list('/api/v1/shopping/items');  
      this.getTask().subscribe(res => {
          console.log('res',res);
          this.items = res;
      });
  }
  getTask(){
      return this.shoppingItem$.valueChanges();     
  }

  addItem(){
    console.log('add Item');
    this.shoppingItem$.push({ name : "coffee power" , size : "250g" });
  }

}
