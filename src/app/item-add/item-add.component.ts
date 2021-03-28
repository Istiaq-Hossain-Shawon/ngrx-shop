import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddItemAction } from '../store/actions/shopping.actions';
import { AppState } from '../store/models/app-state.model';
import { ShoppingItem } from '../store/models/shopping-item.model';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.scss']
})
export class ItemAddComponent implements OnInit {

  newShoppingItem: ShoppingItem = { id: '', name: '' }
  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
  }
  addItem() {
    this.newShoppingItem.id = uuid();

    this._store.dispatch(new AddItemAction(this.newShoppingItem));

    this.newShoppingItem = { id: '', name: '' };
  }

}
