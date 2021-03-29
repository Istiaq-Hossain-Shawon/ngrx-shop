import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ShopMapComponent } from "./shop-map.component";

const routes:Routes=[
    {
        path:'',
        component:ShopMapComponent,

    }
];

@NgModule({
    declarations: [        
        ShopMapComponent
    ],
    imports:[CommonModule,RouterModule.forChild(routes)]
})
export  class ShopModule{}