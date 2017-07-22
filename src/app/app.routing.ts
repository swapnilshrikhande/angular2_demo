import {Routes,RouterModule} from '@angular/router'
import {ProductsComponent} from './products/products.component'
import {DemoComponent} from './demo/demo.component'

// Links url to component
const routesArray:Routes = [
    { path:'',redirectTo:'/demo',pathMatch:'full'},
    { path:'allProducts',component:ProductsComponent },
    { path:'demo',component:DemoComponent }
];

export const routing = RouterModule.forRoot(routesArray);
