import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RemoveItemAction } from '../store/actions/shopping.actions';
import { AppState } from '../store/models/app-state.model';
import { ShoppingItem } from '../store/models/shopping-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  shoppingItems: Observable<Array<ShoppingItem>>;  
  
  constructor(private _store:Store<AppState>) {

  }

  ngOnInit() {
    this.shoppingItems=this._store.select(store=>store.shopping)
  }
  deleteItem(id: string) {
    this._store.dispatch(new RemoveItemAction(id));
  }
  


}
