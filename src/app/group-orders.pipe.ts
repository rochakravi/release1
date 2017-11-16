import { Pipe, PipeTransform } from '@angular/core';

import Order from './order';


function groupOrders( orders ) 
{
  if(!orders) {
    return [];
  }

  var groups = {};
  orders.forEach( function( order )
  {
    var group = JSON.stringify( [order.branch_id, order.ship_date, order.run_time, order.route] );
    groups[group] = groups[group] || {
    	branch_id: order.branch_id,
    	ship_date: order.ship_date,
    	run_time: order.run_time,
    	route: order.route,
    	packaging: 0,
    	pv2: 0,
    	total_scan: 0,
    	ship_ready: 0,
    	total: 0,
    	orders: []
    };
    groups[group].packaging += (order.status=='Packaging' ? 1 : 0);
    groups[group].pv2 += (order.status=='PV2' ? 1 : 0);
    groups[group].total_scan += (order.status=='Total_Scan' ? 1 : 0);
    groups[group].ship_ready += (order.status=='Ship_Ready' ? 1 : 0);
    groups[group].total += 1;
    groups[group].orders.push( order );  
  });
  return Object.keys(groups).map( function( group )
  {
    return groups[group]; 
  })
}


@Pipe({
  name: 'groupOrders'
})
export class GroupOrdersPipe implements PipeTransform {

  transform(orders: Order[], args?: any): any {
  	return groupOrders(orders)
  }

}
