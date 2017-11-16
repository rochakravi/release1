import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  groupedOrder: any;
  field_name: string;

  showDetail(event) {
  	console.log(event);
  	this.groupedOrder = event.groupedOrder;
  	this.field_name = event.field_name;
  }
}
