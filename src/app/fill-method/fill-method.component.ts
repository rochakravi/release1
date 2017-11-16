import { Component, OnInit, ViewEncapsulation, Output, EventEmitter} from '@angular/core';

import { ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';


import {ActivatedRoute, Router} from '@angular/router'

import OrderService from '../order.service';

import Order from '../order';




@Component({
  selector: 'app-fill-method',
  templateUrl: './fill-method.component.html',
  styleUrls: ['./fill-method.component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FillMethodComponent implements OnInit {

	orders: Order[];

  constructor(private orderService: OrderService, private ref: ChangeDetectorRef, private router: Router) {
  	//this.ref.detach();
  }

  ngOnInit() {
  	this.orderService.fetchData().then(response => {
  		this.orders = response;
  		this.ref.detectChanges();
  	});
  }


  showDetail(groupedOrder, field_name) {
  	this.router.navigate(['/detailview', {
  									branch_id: groupedOrder.branch_id,
  									ship_date: groupedOrder.ship_date,
  									run_time: groupedOrder.run_time,
  									route: groupedOrder.route,
  									field_name: field_name
  								}]);
  }

}


