import { IExecuteFunctions } from 'n8n-workflow';
import { IDataObject, INodeExecutionData } from 'n8n-workflow';
import { apiRequest } from '../../../transport';
import { HaloInvoicesListResponse } from '../../Interfaces';

export async function execute(
	this: IExecuteFunctions,
	index: number,
): Promise<INodeExecutionData[]> {
	const returnAll = this.getNodeParameter('returnAll', index) as boolean;
	const filters = this.getNodeParameter('filters', index, {}) as IDataObject;
	
	const qs = {} as IDataObject;
	
	// Apply filters - comprehensive mapping of all available filters
	if (filters.advanced_search) qs.advanced_search = filters.advanced_search;
	if (filters.asset_id) qs.asset_id = filters.asset_id;
	if (filters.awaiting_approval !== undefined) qs.awaiting_approval = filters.awaiting_approval;
	if (filters.billing_date) qs.billing_date = filters.billing_date;
	if (filters.client_id) qs.client_id = filters.client_id;
	if (filters.contract_id) qs.contract_id = filters.contract_id;
	if (filters.currency_code) qs.currency_code = filters.currency_code;
	if (filters.datesearch) qs.datesearch = filters.datesearch;
	if (filters.enddate) qs.enddate = filters.enddate;
	if (filters.exclude_voided !== undefined) qs.exclude_voided = filters.exclude_voided;
	if (filters.includedetails !== undefined) qs.includedetails = filters.includedetails;
	if (filters.include_linked_item_details !== undefined) qs.include_linked_item_details = filters.include_linked_item_details;
	if (filters.order) qs.order = filters.order;
	if (filters.order2) qs.order2 = filters.order2;
	if (filters.order3) qs.order3 = filters.order3;
	if (filters.order4) qs.order4 = filters.order4;
	if (filters.order5) qs.order5 = filters.order5;
	if (filters.orderdesc !== undefined) qs.orderdesc = filters.orderdesc;
	if (filters.orderdesc2 !== undefined) qs.orderdesc2 = filters.orderdesc2;
	if (filters.orderdesc3 !== undefined) qs.orderdesc3 = filters.orderdesc3;
	if (filters.orderdesc4 !== undefined) qs.orderdesc4 = filters.orderdesc4;
	if (filters.orderdesc5 !== undefined) qs.orderdesc5 = filters.orderdesc5;
	if (filters.page_no) qs.page_no = filters.page_no;
	if (filters.page_size) qs.page_size = filters.page_size;
	if (filters.pageinate !== undefined) qs.pageinate = filters.pageinate;
	if (filters.paymentstatuses) qs.paymentstatuses = filters.paymentstatuses;
	if (filters.postedonly !== undefined) qs.postedonly = filters.postedonly;
	if (filters.purchaseorder_id) qs.purchaseorder_id = filters.purchaseorder_id;
	if (filters.quickbooks_id) qs.quickbooks_id = filters.quickbooks_id;
	if (filters.quote_status) qs.quote_status = filters.quote_status;
	if (filters.ready_for_invoicing !== undefined) qs.ready_for_invoicing = filters.ready_for_invoicing;
	if (filters.recurringinvoice_id) qs.recurringinvoice_id = filters.recurringinvoice_id;
	if (filters.reviewrequired !== undefined) qs.reviewrequired = filters.reviewrequired;
	if (filters.rinvoice_type) qs.rinvoice_type = filters.rinvoice_type;
	if (filters.salesorder_id) qs.salesorder_id = filters.salesorder_id;
	if (filters.search) qs.search = filters.search;
	if (filters.sent_status) qs.sent_status = filters.sent_status;
	if (filters.site_id) qs.site_id = filters.site_id;
	if (filters.startdate) qs.startdate = filters.startdate;
	if (filters.stripeautopaymentrequired !== undefined) qs.stripeautopaymentrequired = filters.stripeautopaymentrequired;
	if (filters.third_party_id) qs.third_party_id = filters.third_party_id;
	if (filters.ticket_id) qs.ticket_id = filters.ticket_id;
	if (filters.toplevel_id) qs.toplevel_id = filters.toplevel_id;
	if (filters.user_id) qs.user_id = filters.user_id;
	if (filters.xero_id) qs.xero_id = filters.xero_id;

	if (!returnAll) {
		const limit = this.getNodeParameter('limit', index, 50) as number;
		qs.count = limit;
	}

	const requestMethod = 'GET';
	const endpoint = '/Invoice';
	const body = {} as IDataObject;

	let responseData: HaloInvoicesListResponse;
	responseData = await apiRequest.call(this, requestMethod, endpoint, body, qs);

	// Return the invoices array from the response
	return this.helpers.returnJsonArray(responseData.invoices as any[] || []);
}