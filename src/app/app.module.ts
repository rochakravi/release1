
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router' ;


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FillMethodComponent } from './fill-method/fill-method.component';
import { FillMethodStatsComponent } from './fill-method-stats/fill-method-stats.component';
import { DetailsViewComponent } from './details-view/details-view.component';


import OrderService from './order.service';

import { GroupOrdersPipe } from './group-orders.pipe';


/*


*/ 
const appRoutes: Routes = [
  { path: 'fillmethod', component: FillMethodComponent },
  { path: 'detailview', component: DetailsViewComponent },
];


@NgModule({
  declarations: [
    AppComponent,HeaderComponent, FillMethodComponent, DetailsViewComponent,FillMethodStatsComponent,
   
    GroupOrdersPipe
   
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }



