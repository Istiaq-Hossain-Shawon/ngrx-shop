import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DeleteItemAction, LoadShoppingAction } from '../store/actions/shopping.actions';
import { AppState } from '../store/models/app-state.model';
import { ShoppingItem } from '../store/models/shopping-item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  
  loading$: Observable<Boolean>;
  error$: Observable<Error>
  shoppingItems: Observable<Array<ShoppingItem>>;  
  
  constructor(private _store:Store<AppState>) {
    this.loading$ = this._store.select(store => store.shopping.loading);
    this.error$ = this._store.select(store => store.shopping.error);
    this._store.dispatch(new LoadShoppingAction());
  }

  ngOnInit() {
    this.shoppingItems=this._store.select(store=>store.shopping.list)
  }
  deleteItem(id: string) {
    this._store.dispatch(new DeleteItemAction(id));
  }
  


}
