import { Injectable } from '@angular/core';

import Order from './order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


@Injectable()
export default class OrderService {
	
	private orders: Order[];

  constructor(){ 
  	this.orders = [];
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Packaging'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Red', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'PV2'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Total_Scan'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Packaging'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Red', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'PV2'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'PV2'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Packaging'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Ship_Ready'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Packaging'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Total_Scan'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Blue', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Total_Scan'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'STAT', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Total_Scan'));
  	this.orders.push(new Order('CLE', '3/1/2017', '11:00', 'Red', 'DisneyWorld', 1234, 1, 'Mickey', 
  	'Clonazam', 'Compound', 'N', 'M', 'Packaging'));
  }


  /*


*/ 
  filterOrders(branch_id, ship_date, run_time, route, field_name): Order[] {
    console.log(branch_id, ship_date, run_time, route, field_name);
    console.log(this.orders);
    return this.orders.filter(o => {

          if(field_name && field_name!=='null') {
            // debugger
            return o.branch_id==branch_id && o.ship_date==ship_date && o.run_time==run_time && o.route==route && o.status.toLowerCase() == field_name;
          }
          console.log(o.branch_id, o.ship_date, o.run_time, o.route);

          return o.branch_id==branch_id && o.ship_date==ship_date && o.run_time==run_time && o.route==route;
        });
  }

  /*


*/ 
  fetchData() {

  	return new Promise<Order[]>((resolve, reject) => {
  		resolve(this.orders);
  	})
  }

}
