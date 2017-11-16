import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';

import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import OrderService from '../order.service';
import Order from '../order';


@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DetailsViewComponent implements OnInit {
	public countingSample : any = 100 ;

	/*pagination = {
	    TotalItems: 100,
	    CurrentPage: 1,
	    PageSize: 10,
	    TotalPageLinkButtons: 5,
	    RowsPerPageOptions: [10, 20, 30, 50, 100]
	};*/
  // pagination ended 

  branch_id: string;
  ship_date: string;
  run_time: string;
  route: string;
  field_name: string;

  orders: Observable<Order[]>;

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) { }

  ngOnInit() {

  	// console.log(this.activatedRoute.paramMap.forEach(s => console.log(s)));
  	this.orders = this.activatedRoute.paramMap
  		.switchMap((params: ParamMap) => {
  			this.branch_id =  params.get('branch_id');
  			this.ship_date =  params.get('ship_date');
			this.run_time =  params.get('run_time');
			this.route =  params.get('route');
			this.field_name =  params.get('field_name');
			let orders = this.orderService.filterOrders(this.branch_id, this.ship_date, this.run_time, this.route, this.field_name);
			
			return Observable.of(orders);
  		});
  }

  //@Input groupedOrder: any;
  //@Input field_name: string;

  // pagination logic and methods 

   /* Paging Component metod */
 /* myChanges(event) {
    this.pagination.CurrentPage = event.currentPage;
    this.pagination.TotalItems = event.totalItems;
    this.pagination.PageSize = event.pageSize;
    this.pagination.TotalPageLinkButtons = event.totalPageLinkButtons;
  }*/

  // pagination logic ends here 

}
