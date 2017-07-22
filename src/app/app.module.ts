import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { ProductsComponent } from './products/products.component';
import {routing} from './app.routing';
import { MenuComponent } from './menu.component';
import { DoublePipe } from './double.pipe';
import { FilterPipe } from './filter.pipe'
import { ProductdataService } from './productdata.service'

@NgModule({
  declarations: [
      AppComponent,
      DemoComponent,
      ProductsComponent,
      MenuComponent,
      DoublePipe,
      FilterPipe    /*components, pipes, directives*/
    ],
    imports: [
        BrowserModule
      , FormsModule
      , HttpModule
      , routing   /*import FormsModules for form related stuff, HttpModule for connection*/
    ],
    providers: [ProductdataService],
    bootstrap: [AppComponent] /*root component*/
})
export class AppModule { }
