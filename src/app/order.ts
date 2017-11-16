export default class Order {
	

	constructor(
		public branch_id: string,
		public ship_date: string,
		public run_time: string,
		public route: string,
		public facility: string,
		public rx_number: number,
		public order_label: number,
		public patient_name: string,
		public drug_name: string,
		public fill_method: string,
		public nr: string,
		public ma: string,
		public status: string
	) {}
}
