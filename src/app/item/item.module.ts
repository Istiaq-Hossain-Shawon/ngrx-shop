import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { ShoppingEffects } from "../store/effects/shopping.effects";
import { ShoppingReducer } from "../store/reducers/shopping.reducer";
import { ItemAddComponent } from "./item-add/item-add.component";
import { ItemHomeComponent } from './item-home/item-home.component';
import { ItemListComponent } from "./item-list/item-list.component";

const routes:Routes=[
    {
        path:'',
        component:ItemHomeComponent,

    }
];

@NgModule({
    declarations: [        
        ItemHomeComponent, ItemAddComponent,ItemListComponent
    ],
    imports:[CommonModule,RouterModule.forChild(routes),
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot({
          shopping:ShoppingReducer
        }),        
        EffectsModule.forRoot([ShoppingEffects])
    ]
})
export  class ItemModule{}